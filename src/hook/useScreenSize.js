import { useState, useEffect } from 'react';

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState('desktop');

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 768) {
        setScreenSize('mobile');
      } else if (width > 768 && width < 1200) {
        setScreenSize('tablet');
      } else {
        setScreenSize('desktop');
      }
    };

    // Set initial size
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return screenSize;
};

export default useScreenSize; 