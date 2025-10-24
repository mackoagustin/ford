import { useEffect, useState } from 'react';

const useTracking = () => {
  const [isTrackingLoaded, setIsTrackingLoaded] = useState(false);
  const [interactionDetected, setInteractionDetected] = useState(false);

  useEffect(() => {
    // Verificar si ya se cargaron los scripts desde el HTML
    if (window.trackingScripts && window.trackingScripts.loaded) {
      setIsTrackingLoaded(true);
      return;
    }

    // Cargar scripts después de interacción del usuario
    const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart', 'click'];
    
    const handleInteraction = () => {
      if (interactionDetected) return;
      
      setInteractionDetected(true);
      events.forEach(event => {
        document.removeEventListener(event, handleInteraction, true);
      });
      
      // Cargar scripts de tracking
      if (window.trackingScripts) {
        window.trackingScripts.loadOnDemand();
        setIsTrackingLoaded(true);
      }
    };

    events.forEach(event => {
      document.addEventListener(event, handleInteraction, true);
    });

    // Fallback: cargar después de 10 segundos si no hay interacción
    const fallbackTimer = setTimeout(() => {
      if (!interactionDetected) {
        if (window.trackingScripts) {
          window.trackingScripts.loadOnDemand();
          setIsTrackingLoaded(true);
        }
      }
    }, 10000);

    return () => {
      events.forEach(event => {
        document.removeEventListener(event, handleInteraction, true);
      });
      clearTimeout(fallbackTimer);
    };
  }, [interactionDetected]);

  return { isTrackingLoaded, interactionDetected };
};

export default useTracking;
