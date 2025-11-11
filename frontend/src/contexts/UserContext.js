import React, { createContext, useState, useEffect, useCallback } from 'react';

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    // Try to get user from localStorage on initial load
    const storedUser = localStorage.getItem('user');
    const parsed = storedUser ? JSON.parse(storedUser) : null;
    return parsed ? parsed : null;
  });

  const [token, setToken] = useState(() => {
    // Try to get token from localStorage on initial load
    const storedToken = localStorage.getItem('token');
    return storedToken ? storedToken : null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token);
    } else {
      localStorage.removeItem('token');
    }
  }, [token]);

  const login = useCallback((userData, authToken) => {
    setUser(userData);
    setToken(authToken);
  }, []);

  const logout = () => {
    setUser(null);
    setToken(null);
  };

  return (
    <UserContext.Provider value={{ user, token, setUser, setToken, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
