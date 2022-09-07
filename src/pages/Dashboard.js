import React, {useContext} from 'react';
import {userContext} from "../userContext";
import {Link, Navigate} from "react-router-dom";

function Dashboard() {
	const {isAuthenticated} = useContext(userContext)
	if (isAuthenticated) {
		return (
			<div>
				<ul>
					<li><Link to={'/'}>Home</Link></li>
					<li><Link to={'/create-room'}>Create room</Link></li>
					<li><Link to={'/join-room'}>Join room</Link></li>
					<li><Link to={'/my-rooms'}>My rooms</Link></li>
					<li><Link to={'/my-requests'}>My Requests</Link></li>
					<li><Link to={'/my-invitations'}>My Invitations</Link></li>
				</ul>
			</div>
		);
	} else {
		return (
			<Navigate to={'/login'}/>
		)
	}
}

export default Dashboard;