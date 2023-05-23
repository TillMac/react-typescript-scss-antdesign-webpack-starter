import LoginPage from '@pages/LoginPage/LoginPage';
import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const AppRouter: React.FC = () => {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <LoginPage />,
		},
	]);

	return (
		<div style={{ width: '100%', height: '100vh', margin: 0, padding: 0 }}>
			<RouterProvider router={router} />
		</div>
	);
};

export default AppRouter;
