import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

export function useAdminAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if admin token exists
    const token = Cookies.get('admin_token');
    setIsAuthenticated(!!token);
    setIsLoading(false);
  }, []);

  const login = (username: string, password: string): boolean => {
    const adminUsername = process.env.NEXT_PUBLIC_ADMIN_USERNAME || 'adminManh';
    const adminPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || 'Manh@123!';
    
    if (username === adminUsername && password === adminPassword) {
      Cookies.set('admin_token', 'h2n_admin_authenticated', { expires: 7 });
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    Cookies.remove('admin_token');
    setIsAuthenticated(false);
  };

  return { isAuthenticated, login, logout, isLoading };
}
