import React, { createContext, useState } from 'react';

export const AppContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState(null);

  const login = (token, user) => {
    localStorage.setItem('gf-token', token);
    setIsAuth(true);
    setUser(user);
  };

  const logout = () => {
    localStorage.removeItem('gf-token');
    setIsAuth(false);
    setUser(null);
  };

  return (
    <AppContext.Provider value={{ isAuth, user, login, logout }}>
      {children}
    </AppContext.Provider>
  );
};

export default AuthContextProvider;
