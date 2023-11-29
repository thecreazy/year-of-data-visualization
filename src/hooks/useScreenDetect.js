'use client';

import { useEffect, useState } from 'react';

export const useScreenDetect = () => {
  let initialValue = 0;
  if (typeof window !== 'undefined') {
    initialValue = window.innerWidth;
  }
  const [width, setWidth] = useState(initialValue);
  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);
  return {
    isSmallScreen: width <= 650,
  };
};
