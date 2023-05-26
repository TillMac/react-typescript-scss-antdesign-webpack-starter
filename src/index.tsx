import React from 'react';
import AppRouter from './AppRouter';
import { AuthContextProvider } from './AuthContext';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root') as Element);

root.render(
	<React.StrictMode>
		<AuthContextProvider>
			<AppRouter />
		</AuthContextProvider>
	</React.StrictMode>
);
