import { useCallback, useEffect } from "react";

type UseLocalStorage<V> = [() => V | null, (value: V) => void];

const useLocalStorage = <V>(
  key: string,
  initialValue: V,
): UseLocalStorage<V> => {
  useEffect(() => {
    if (!localStorage.getItem(key)) {
      localStorage.setItem(key, JSON.stringify(initialValue));
    }
  }, [key, initialValue]);

  const getValue = useCallback(() => {
    try {
      const storageValue = localStorage.getItem(key);
      if (storageValue) {
        return JSON.parse(storageValue) as V;
      }
    } catch (error) {
      localStorage.removeItem(key);
      console.error(error);
    }
    return null;
  }, [key]);

  const setValue = useCallback(
    (value) => localStorage.setItem(key, JSON.stringify(value)),
    [key],
  );
  return [getValue, setValue];
};

export default useLocalStorage;
