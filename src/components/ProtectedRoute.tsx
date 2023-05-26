import AuthContext from '@src/AuthContext';
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }: any) => {
	const authContext = useContext(AuthContext);

	if (!authContext.isLoggedIn) {
		return <Navigate to="/login" replace />;
	}

	return children;
};

export default ProtectedRoute;
