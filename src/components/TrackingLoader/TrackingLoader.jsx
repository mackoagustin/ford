import { useEffect } from 'react';
import useTracking from '../../hooks/useTracking';

const TrackingLoader = () => {
  const { isTrackingLoaded, interactionDetected } = useTracking();

  useEffect(() => {
    // Log para debugging (solo en desarrollo)
    if (process.env.NODE_ENV === 'development') {
      console.log('Tracking status:', { isTrackingLoaded, interactionDetected });
    }
  }, [isTrackingLoaded, interactionDetected]);

  // Este componente no renderiza nada visible
  // Solo se encarga de cargar los scripts de tracking
  return null;
};

export default TrackingLoader;
