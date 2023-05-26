import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

const AuthContext = React.createContext({
	isLoggedIn: false,
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	onLogout: () => {},
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	onLogin: () => {},
});

export const AuthContextProvider = (props: any) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const logoutHandler = () => {
		setIsLoggedIn(false);
	};

	const loginHandler = () => {
		setIsLoggedIn(true);
	};

	return (
		<AuthContext.Provider
			value={{
				isLoggedIn,
				onLogout: logoutHandler,
				onLogin: loginHandler,
			}}
		>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthContext;
