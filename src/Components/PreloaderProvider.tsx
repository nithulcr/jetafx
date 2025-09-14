// src/Components/PreloaderProvider.tsx
"use client";

import { createContext, useContext, useState, useEffect } from 'react';
import Preloader from './Preloader';

const PreloaderContext = createContext({
  isLoading: true,
  setIsLoading: (loading: boolean) => {},
});

export const usePreloader = () => useContext(PreloaderContext);

export const PreloaderProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem('hasVisited');
    if (hasVisited) {
      setIsLoading(false);
    } else {
      sessionStorage.setItem('hasVisited', 'true');
    }
  }, []);

  const handlePreloaderComplete = () => {
    setIsLoading(false);
  };

  return (
    <PreloaderContext.Provider value={{ isLoading, setIsLoading }}>
      {isLoading ? <Preloader onComplete={handlePreloaderComplete} /> : children}
    </PreloaderContext.Provider>
  );
};
