import React, {useContext, useEffect, useState} from 'react';
import {userContext} from "../userContext";
import {Navigate} from "react-router-dom";
import getRequests from "../apiCalls/getRequests";
import status from "../utils/checkStatus";


function MyRequests() {
	const {isAuthenticated} = useContext(userContext)
	const [requests, setRequests] = useState([]);
	useEffect(() => {
		getRequests(setRequests)
	}, []);

	if (isAuthenticated) {
		return (
			<div>
				My requests here
				{requests.length !== 0 && requests.map(request => (
					<p key={request.id}>Request sent to {request.for_room.name} is {status(request.status)}</p>
				))}
			</div>
		);
	} else {
		return (<Navigate to={'/login'}/>)
	}
}

export default MyRequests;