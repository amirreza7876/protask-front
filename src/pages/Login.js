import React, {useContext, useState} from 'react';
import api from "../api";
import {Navigate, useNavigate} from "react-router-dom";
import {userContext} from "../userContext";
import {EyeIcon, EyeSlashIcon, KeyIcon, UserIcon} from "@heroicons/react/24/outline";

function Login() {
	let navigate = useNavigate();
	const [password, setPassword] = useState('');
	const [username, setUsername] = useState('initState');
	const [visible, setVisible] = useState(false);
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
			<div className={'grid grid-cols-2 h-screen bg-gradient-to-r from-white to-[#e4e9ff] via-[#e4e9ff]'}>
				<div className={'self-center'}>
					<div className={'b w-fit p-16 m-auto rounded-lg'}>
						<form className={'table-caption '} onSubmit={e => handleLogin(e)}>
							<span className={'flex'}>
								<UserIcon className={'h-6 w-6 mr-3 self-center'}/>
								<input placeholder={'Username'} className={'my-2 p-2 rounded'} type="text"
									   name="username"
									   onChange={e => setUsername(e.target.value)}
									   id=""/>
							</span>
							<span className={'flex'}>
								<KeyIcon className={'h-6 w-6 mr-3 self-center'}/>
								<label className={'relative'}>
									{visible?
									<EyeSlashIcon className={'h-4 w-4 absolute right-3 top-1/3 cursor-pointer'}
												  onClick={() => setVisible(!visible)}/>
									:
										<EyeIcon className={'h-4 w-4 absolute right-3 top-1/3 cursor-pointer'}
											 onClick={() => setVisible(!visible)}/>
									}

									<input placeholder={'Password'} className={'my-2 p-2 rounded'}
										   type={`${visible ? 'text' : 'password'}`}
										   name="password"
										   onChange={e => setPassword(e.target.value)} id=""/>
								</label>
							</span>
							<input type="submit"
								   className={'cursor-pointer bg-[#682e92] text-white hover:bg-indigo-300 p-3 rounded py-2'}
								   value={"LOGIN"} name="" id=""/>
						</form>
					</div>
				</div>
				<div className={'w-full'}>
					<div className={'m-auto h-screen w-1/3 bg-contain bg-login bg-no-repeat bg-center'}>
					</div>
				</div>
			</div>
		);
	}
}

export default Login;