import { useState } from 'react';

const STORAGE_KEY = 'ot_api_key';

export function useApiKey() {
  const [apiKey, setApiKey] = useState(() => localStorage.getItem(STORAGE_KEY) || '');

  const saveKey = (key) => {
    setApiKey(key);
    localStorage.setItem(STORAGE_KEY, key);
  };

  const clearKey = () => {
    setApiKey('');
    localStorage.removeItem(STORAGE_KEY);
  };

  return { apiKey, saveKey, clearKey };
}
