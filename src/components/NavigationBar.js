import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {userContext} from "../userContext";

function NavigationBar(props) {
	const {isAuthenticated} = useContext(userContext)
	const handleLogout = () =>{
		localStorage.removeItem('token')
		window.location.reload()
	}
	if (isAuthenticated) {
		return (
			<div>
				<li><Link to={'dashboard'}>Dashboard</Link></li>
				<li><button onClick={handleLogout}>logout</button></li>
			</div>
		)
	} else {
		return (
			<div>
				<ul>
					<li><Link to={'login'}>Login</Link></li>
					<li><Link to={'register'}>Register</Link></li>

				</ul>
			</div>
		);
	}
}

export default NavigationBar;