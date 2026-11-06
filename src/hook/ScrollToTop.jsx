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

    const hash = location.hash.replace('#', '');

    if (hash) {
      let attempts = 0;
      const timer = setInterval(() => {
        const target = document.getElementById(hash);
        if (target) {
          target.scrollIntoView({ block: 'start' });
          clearInterval(timer);
          html.style.scrollBehavior = previousBehavior;
        } else if (++attempts > 30) {
          clearInterval(timer);
          html.style.scrollBehavior = previousBehavior;
        }
      }, 50);

      return () => {
        clearInterval(timer);
        html.style.scrollBehavior = previousBehavior;
      };
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    html.scrollTop = 0;
    document.body.scrollTop = 0;
    html.style.scrollBehavior = previousBehavior;
  }, [location.pathname, location.key, location.hash]); 

  return null; 
}

export default ScrollToTop;