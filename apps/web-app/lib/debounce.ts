import { useEffect, useState } from 'react';

export const useDebounce = <T>(query: T, delay = 500) => {
  const [debounceValue, setDebounceValue] = useState<T>(query);
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setDebounceValue(query);
    }, delay);
    return () => clearTimeout(timeOut);
  }, [query, delay]);
  return debounceValue;
};
