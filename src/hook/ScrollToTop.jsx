// src/components/ScrollToTop.jsx (o donde prefieras tus hooks/utilidades)
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const html = document.documentElement;
    const previousBehavior = html.style.scrollBehavior;
    html.style.scrollBehavior = 'auto';
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    html.scrollTop = 0;
    document.body.scrollTop = 0;
    html.style.scrollBehavior = previousBehavior;
  }, [location.pathname, location.key]); 

  return null; 
}

export default ScrollToTop;