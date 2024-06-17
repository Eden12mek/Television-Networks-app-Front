import React from 'react';
import { Navigate } from 'react-router-dom';

const Auth = (Component) => {
  return (props) => {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
      return <Navigate to="/login" />;
    }
    return <Component {...props} />;
  };
};




export default Auth;