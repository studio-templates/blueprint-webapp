import { useState, useEffect, SetStateAction, Dispatch  } from 'react';

type ReturnType<T> = [
  T,
  Dispatch<SetStateAction<T>>
];

export const usePersistentState = <T,>(
  key: string,
  initialValue: T

): ReturnType<T> => {
  
  const [state, setState] = useState<T>(() => {   
    try {
      const value = sessionStorage.getItem(key);
      return value ? JSON.parse(value) : initialValue;
    } catch (err) {
      return initialValue;
    }
  });

  useEffect(() => {    
    try {
      sessionStorage.setItem(key, JSON.stringify(state));
    } catch (err) {}    
  }, [state, key]);

  return [state, setState];
};