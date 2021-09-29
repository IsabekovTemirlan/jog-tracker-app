import { useState, useCallback, useEffect } from 'react';
export const STORAGE_NAME = "jog_tracker_app_data";

export const useAuth = () => {
  const [token, setToken] = useState(null);

  const login = useCallback((data) => {
    localStorage.setItem(STORAGE_NAME, data);
    setToken(data);
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    localStorage.removeItem(STORAGE_NAME);
  }, []);

  useEffect(() => {
    const data = localStorage.getItem(STORAGE_NAME) || "";
    if (data) login(data);
  }, []);

  return {token, login, logout};
};