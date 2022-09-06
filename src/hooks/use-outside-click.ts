import {useEffect} from 'react';

export const useOutsideClick = (ref: any, callback: Function) => {
  const handleCLick = (e: Event) => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  };
  useEffect(() => {
    document.addEventListener('click', handleCLick);
    return () => {
      document.removeEventListener('click', handleCLick);
    };
  });
};
