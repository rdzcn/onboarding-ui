import { useCallback, useEffect } from "react";

type UseSessionStorage<V> = [() => V | null, (value: V) => void];

const useSessionStorage = <V>(
  key: string,
  initialValue: V,
): UseSessionStorage<V> => {
  useEffect(() => {
    if (!sessionStorage.getItem(key)) {
      sessionStorage.setItem(key, JSON.stringify(initialValue));
    }
  }, [key, initialValue]);

  const getValue = useCallback(() => {
    try {
      const storageValue = sessionStorage.getItem(key);
      if (storageValue) {
        return JSON.parse(storageValue) as V;
      }
    } catch (error) {
      sessionStorage.removeItem(key);
    }
    return null;
  }, [key]);

  const setValue = useCallback(
    (value) => sessionStorage.setItem(key, JSON.stringify(value)),
    [key],
  );
  return [getValue, setValue];
};

export default useSessionStorage;
