import React, { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const changeAuthStatus = () => {
		setIsLoggedIn(!isLoggedIn);
	};

	return (
		<AuthContextProvider value={{ isLoggedIn, changeAuthStatus }}>
			{children}
		</AuthContextProvider>
	);
};

export default AuthContextProvider;
