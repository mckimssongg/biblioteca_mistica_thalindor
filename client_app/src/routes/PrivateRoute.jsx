import React from 'react';
import { Navigate } from 'react-router-dom';
import { isAuthenticated } from './auth/auth';

const PrivateRoute = ({ children }) => {
    return isAuthenticated() ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
