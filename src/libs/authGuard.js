// src/libs/AuthGuard.jsx
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const AuthGuard = ({ children }) => {
  const location = useLocation();
  const token = localStorage.getItem('gf-token');

  if (token) {
    return children;
  } else {
    // Save the path the user was trying to access
    return <Navigate to="/login" state={{ from: location }} />;
  }
};

export default AuthGuard;
