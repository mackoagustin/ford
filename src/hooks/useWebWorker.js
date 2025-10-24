import { useEffect, useRef, useState } from 'react';

const useWebWorker = (workerScript) => {
  const workerRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Crear el worker
    try {
      workerRef.current = new Worker(new URL(workerScript, import.meta.url));
      
      workerRef.current.onerror = (error) => {
        setError(error);
        setIsLoading(false);
      };
      
      workerRef.current.onmessageerror = (error) => {
        setError(error);
        setIsLoading(false);
      };
      
    } catch (err) {
      setError(err);
    }

    return () => {
      if (workerRef.current) {
        workerRef.current.terminate();
      }
    };
  }, [workerScript]);

  const postMessage = (message) => {
    if (workerRef.current && !isLoading) {
      setIsLoading(true);
      setError(null);
      workerRef.current.postMessage(message);
    }
  };

  const onMessage = (callback) => {
    if (workerRef.current) {
      const handleMessage = (event) => {
        setIsLoading(false);
        callback(event.data);
      };
      
      workerRef.current.onmessage = handleMessage;
      
      return () => {
        if (workerRef.current) {
          workerRef.current.onmessage = null;
        }
      };
    }
  };

  return {
    postMessage,
    onMessage,
    isLoading,
    error,
    isReady: !!workerRef.current && !error
  };
};

export default useWebWorker;
