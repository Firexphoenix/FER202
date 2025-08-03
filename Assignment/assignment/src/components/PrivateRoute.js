// src/components/PrivateRoute.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children, roles = [] }) => {
    const { user } = useSelector((state) => state.auth);

    if (!user) return <Navigate to="/login" replace />;
    if (roles.length > 0 && !roles.includes(user.role)) return <Navigate to="/" replace />;

    return children;
};

export default PrivateRoute;
