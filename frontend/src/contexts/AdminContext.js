import React, { createContext, useCallback, useEffect, useState } from 'react';

export const AdminContext = createContext(null);

export const AdminProvider = ({ children }) => {
  const [admin, setAdmin] = useState(() => {
    const stored = localStorage.getItem('admin');
    return stored ? JSON.parse(stored) : null;
  });

  const [adminToken, setAdminToken] = useState(() => {
    return localStorage.getItem('adminToken') || null;
  });

  useEffect(() => {
    if (admin) localStorage.setItem('admin', JSON.stringify(admin));
    else localStorage.removeItem('admin');
  }, [admin]);

  useEffect(() => {
    if (adminToken) localStorage.setItem('adminToken', adminToken);
    else localStorage.removeItem('adminToken');
  }, [adminToken]);

  const login = useCallback((adminUser, token) => {
    setAdmin(adminUser);
    setAdminToken(token);
  }, []);

  const logout = useCallback(() => {
    setAdmin(null);
    setAdminToken(null);
  }, []);

  return (
    <AdminContext.Provider value={{ admin, adminToken, login, logout }}>
      {children}
    </AdminContext.Provider>
  );
};

