import React, {useContext, useState} from 'react';
import api from "../api";
import {Navigate, useNavigate} from "react-router-dom";
import {userContext} from "../userContext";

function Login() {
	let navigate = useNavigate();
	const [password, setPassword] = useState('');
	const [username, setUsername] = useState('initState');
	const {isAuthenticated, setIsAuthenticated} = useContext(userContext)
	const handleLogin = async (e) => {
		e.preventDefault()
		const response = await api.post('/api/token/', {password, username})
		if (response.status === 200) {
			const token = response.data.access
			localStorage.setItem('token', token)
			setIsAuthenticated(true)
			navigate('/dashboard')
		}
	}

	if (isAuthenticated) {
		return (
			<Navigate to={'/dashboard'}/>
		)
	} else {
		return (
			<div>
				<form onSubmit={e => handleLogin(e)}>
					<input placeholder={'Username'} type="text" name="username"
						   onChange={e => setUsername(e.target.value)}
						   id=""/>
					<input placeholder={'Password'} type="password" name="password"
						   onChange={e => setPassword(e.target.value)} id=""/>
					<input type="submit" value={"LOGIN"} name="" id=""/>
				</form>
			</div>
		);
	}
}

export default Login;