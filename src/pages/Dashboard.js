import React, {useContext} from 'react';
import {userContext} from "../userContext";
import {Navigate} from "react-router-dom";

function Dashboard() {
	const {isAuthenticated} = useContext(userContext)
	if (isAuthenticated) {
		return (
			<div>Dashboard</div>
		);
	} else {
		return (
			<Navigate to={'/login'}/>
		)
	}
}

export default Dashboard;