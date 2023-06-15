import { useMemo, useState } from "react";

export const useLocalStorage = (key, value) => {
  const initialValue = useMemo(() => {
    const item = JSON.parse(localStorage.getItem(key));

    return item ? item : value;
  }, [key, value]);

  const [storedValue, setStoredValue] = useState(initialValue);

  const setValue = (value) => {
    setStoredValue(value);
    localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedValue, setValue];
};
