import Home from '@pages/Home/Home';
import React from 'react';
import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router-dom';
import LoginPage from '@pages/LoginPage/LoginPage';
import ProtectedRoute from '@src/components/ProtectedRoute';

const AppRouter: React.FC = () => {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route>
				<Route
					index
					element={
						<ProtectedRoute>
							<Home />
						</ProtectedRoute>
					}
				/>
				<Route
					path="home"
					element={
						<ProtectedRoute>
							<Home />
						</ProtectedRoute>
					}
				/>
				<Route path="login" element={<LoginPage />} />
			</Route>
		)
	);
	// console.log('router', router);

	return (
		<div style={{ width: '100%', height: '100vh', margin: 0, padding: 0 }}>
			<RouterProvider router={router} />
		</div>
	);
};

export default AppRouter;
