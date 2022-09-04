import React, {useContext, useState} from 'react';
import {userContext} from "../userContext";
import {Navigate, useNavigate} from "react-router-dom";
import api from "../api";

function Register(props) {
	let navigate = useNavigate();
	const {isAuthenticated, setIsAuthenticated} = useContext(userContext)
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [username, setUsername] = useState('');
	const handleRegister = async (e) => {
		e.preventDefault()
		const response = await api.post('/user/api/register/', {password, username, email})
		if (response.status === 201) {
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
				<form onSubmit={e => handleRegister(e)}>
					<input type="email" name="email" placeholder={'Email'} onChange={e => setEmail(e.target.value)}
						   id=""/>
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

export default Register;