import { useCallback, useRef, useMemo } from 'react';

const useOptimizedRender = () => {
  const renderCountRef = useRef(0);
  const lastRenderTimeRef = useRef(0);

  // Función para optimizar renders usando requestAnimationFrame
  const optimizedRender = useCallback((callback) => {
    const now = performance.now();
    
    // Throttle renders a 60fps (16.67ms)
    if (now - lastRenderTimeRef.current >= 16.67) {
      requestAnimationFrame(() => {
        callback();
        lastRenderTimeRef.current = now;
        renderCountRef.current++;
      });
    }
  }, []);

  // Función para debounce renders
  const debouncedRender = useCallback((callback, delay = 16) => {
    const timeoutRef = useRef(null);
    
    return (...args) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      
      timeoutRef.current = setTimeout(() => {
        callback(...args);
      }, delay);
    };
  }, []);

  // Función para memoizar cálculos pesados
  const memoizedCalculation = useCallback((calculation, dependencies) => {
    return useMemo(() => {
      const startTime = performance.now();
      const result = calculation();
      const endTime = performance.now();
      
      // Log cálculos que toman más de 1ms
      if (endTime - startTime > 1) {
        console.warn(`Heavy calculation took ${endTime - startTime}ms`);
      }
      
      return result;
    }, dependencies);
  }, []);

  // Función para optimizar listas grandes
  const optimizedListRender = useCallback((items, renderItem, options = {}) => {
    const {
      batchSize = 50,
      delay = 16,
      onBatchComplete
    } = options;

    return useMemo(() => {
      if (items.length <= batchSize) {
        return items.map(renderItem);
      }

      // Para listas grandes, renderizar en batches
      const batches = [];
      for (let i = 0; i < items.length; i += batchSize) {
        batches.push(items.slice(i, i + batchSize));
      }

      // Renderizar primer batch inmediatamente
      const firstBatch = batches[0]?.map(renderItem) || [];
      
      // Programar renderizado de batches restantes
      if (batches.length > 1) {
        setTimeout(() => {
          batches.slice(1).forEach((batch, index) => {
            setTimeout(() => {
              const batchElements = batch.map(renderItem);
              onBatchComplete?.(batchElements, index + 1);
            }, delay * (index + 1));
          });
        }, delay);
      }

      return firstBatch;
    }, [items, renderItem, batchSize, delay, onBatchComplete]);
  }, []);

  // Función para optimizar animaciones
  const optimizedAnimation = useCallback((element, animation, duration = 300) => {
    return new Promise((resolve) => {
      const startTime = performance.now();
      
      const animate = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Aplicar animación
        animation(progress);
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          resolve();
        }
      };
      
      requestAnimationFrame(animate);
    });
  }, []);

  return {
    optimizedRender,
    debouncedRender,
    memoizedCalculation,
    optimizedListRender,
    optimizedAnimation,
    renderCount: renderCountRef.current
  };
};

export default useOptimizedRender;
