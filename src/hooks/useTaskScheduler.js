import { useCallback, useRef } from 'react';

const useTaskScheduler = () => {
  const taskQueueRef = useRef([]);
  const isProcessingRef = useRef(false);

  const processTask = useCallback(async (task) => {
    const startTime = performance.now();
    
    try {
      // Ejecutar la tarea
      const result = await task();
      
      // Verificar si hemos excedido el tiempo límite (5ms)
      const executionTime = performance.now() - startTime;
      
      if (executionTime > 5) {
        console.warn(`Task took ${executionTime}ms, consider breaking it down further`);
      }
      
      return result;
    } catch (error) {
      console.error('Task execution error:', error);
      throw error;
    }
  }, []);

  const scheduleTask = useCallback((task, priority = 'normal') => {
    return new Promise((resolve, reject) => {
      const taskWrapper = {
        task,
        priority,
        resolve,
        reject,
        timestamp: Date.now()
      };

      // Insertar tarea según prioridad
      if (priority === 'high') {
        taskQueueRef.current.unshift(taskWrapper);
      } else {
        taskQueueRef.current.push(taskWrapper);
      }

      // Iniciar procesamiento si no está en curso
      if (!isProcessingRef.current) {
        processTaskQueue();
      }
    });
  }, []);

  const processTaskQueue = useCallback(async () => {
    if (isProcessingRef.current || taskQueueRef.current.length === 0) {
      return;
    }

    isProcessingRef.current = true;

    while (taskQueueRef.current.length > 0) {
      const taskWrapper = taskQueueRef.current.shift();
      
      try {
        const result = await processTask(taskWrapper.task);
        taskWrapper.resolve(result);
      } catch (error) {
        taskWrapper.reject(error);
      }

      // Verificar si necesitamos hacer una pausa para no bloquear el hilo principal
      const shouldYield = performance.now() % 16 > 10; // Pausar si hemos usado mucho tiempo
      
      if (shouldYield) {
        // Usar requestAnimationFrame para ceder control al navegador
        await new Promise(resolve => requestAnimationFrame(resolve));
      }
    }

    isProcessingRef.current = false;
  }, [processTask]);

  const scheduleBatch = useCallback((tasks, batchSize = 5) => {
    return new Promise((resolve, reject) => {
      const results = [];
      let completed = 0;
      let hasError = false;

      const processBatch = async (batch) => {
        try {
          const batchResults = await Promise.all(
            batch.map(task => processTask(task))
          );
          
          results.push(...batchResults);
          completed += batch.length;

          if (completed === tasks.length) {
            resolve(results);
          } else if (!hasError) {
            // Programar siguiente batch
            const nextBatch = tasks.slice(completed, completed + batchSize);
            if (nextBatch.length > 0) {
              setTimeout(() => processBatch(nextBatch), 0);
            }
          }
        } catch (error) {
          if (!hasError) {
            hasError = true;
            reject(error);
          }
        }
      };

      // Iniciar con el primer batch
      const firstBatch = tasks.slice(0, batchSize);
      processBatch(firstBatch);
    });
  }, [processTask]);

  return {
    scheduleTask,
    scheduleBatch,
    isProcessing: isProcessingRef.current,
    queueLength: taskQueueRef.current.length
  };
};

export default useTaskScheduler;
