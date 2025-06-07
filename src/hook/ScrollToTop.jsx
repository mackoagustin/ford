// src/components/ScrollToTop.jsx (o donde prefieras tus hooks/utilidades)
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
   
    window.scrollTo(0, 0);
  }, [pathname]); 

  return null; 
}

export default ScrollToTop;