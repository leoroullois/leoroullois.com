import {useEffect, useState} from 'react';

export const usePageLoading = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return [isLoading];
};
