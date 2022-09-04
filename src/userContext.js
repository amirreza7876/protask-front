import {createContext, useState} from "react";

const userContext = createContext()

const UserContextProvider = ({children}) => {
	const [isAuthenticated, setIsAuthenticated] = useState(Boolean);
	const token = localStorage.getItem('token')
	if (token && !isAuthenticated) {
		setIsAuthenticated(true)
	}
	return (
		<userContext.Provider value={
			{
				isAuthenticated, setIsAuthenticated
			}
		}>
			{children}
		</userContext.Provider>
	)
}

export {userContext, UserContextProvider}