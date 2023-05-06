import { useEffect, useState } from 'react';

/**
 * Persist the state with local storage so that it remains after a page refresh.
 *
 * @param {string} key Storage key
 * @param {any} initialValue Initial value to set in storage
 * @returns Value and setter
 */
export default function useLocalStorage(key, initialValue) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === 'undefined') {
      return initialValue;
    }
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error also return initialValue
      console.log(error);
      return initialValue;
    }
  });
  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = (value) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      // Save state
      setStoredValue(valueToStore);
      // Save to local storage
      if (typeof window !== 'undefined') {
        if (typeof valueToStore !== 'undefined') {
          window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } else {
          window.localStorage.removeItem(key);
        }
      }
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error);
    }
  };
  // Sync state across tabs
  useEffect(() => {
    const onStorage = (e) => {
      if (e.key === key && e.newValue) setStoredValue(JSON.parse(e.newValue));
    };
    if (typeof window !== 'undefined') {
      window.addEventListener('storage', onStorage);
    }
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('storage', onStorage);
      }
    };
  }, [key]);

  return [storedValue, setValue];
}
