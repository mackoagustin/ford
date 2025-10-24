import { useEffect, useRef, useCallback } from 'react';

const useIdleCallback = (callback, deps = []) => {
  const callbackRef = useRef(callback);
  const timeoutRef = useRef(null);

  // Actualizar la referencia del callback
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  const scheduleIdleCallback = useCallback((...args) => {
    // Cancelar timeout anterior si existe
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Usar requestIdleCallback si está disponible, sino setTimeout como fallback
    if (window.requestIdleCallback) {
      timeoutRef.current = requestIdleCallback((deadline) => {
        // Solo ejecutar si tenemos tiempo disponible
        if (deadline.timeRemaining() > 0) {
          callbackRef.current(...args);
        } else {
          // Si no tenemos tiempo, programar para el siguiente frame
          timeoutRef.current = requestAnimationFrame(() => {
            callbackRef.current(...args);
          });
        }
      }, { timeout: 100 });
    } else {
      // Fallback para navegadores que no soportan requestIdleCallback
      timeoutRef.current = setTimeout(() => {
        callbackRef.current(...args);
      }, 0);
    }
  }, []);

  const cancelIdleCallback = useCallback(() => {
    if (timeoutRef.current) {
      if (window.cancelIdleCallback) {
        cancelIdleCallback(timeoutRef.current);
      } else {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = null;
    }
  }, []);

  // Cleanup al desmontar
  useEffect(() => {
    return () => {
      cancelIdleCallback();
    };
  }, [cancelIdleCallback]);

  return { scheduleIdleCallback, cancelIdleCallback };
};

export default useIdleCallback;
