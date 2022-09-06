import React, {useContext, useEffect, useState} from 'react';
import {Navigate, useLocation, useParams} from "react-router-dom";
import {userContext} from "../userContext";
import getRoomRequests from "../apiCalls/getRoomRequests";
import handleRequest from "../utils/handleRequest";
import status from "../utils/checkStatus";

function RoomRequests(props) {
	const {id, roomString: requestString} = useParams()
	const [roomRequests, setRoomRequests] = useState({});
	const {isAuthenticated} = useContext(userContext)

	useEffect(() => {
		getRoomRequests(setRoomRequests, requestString, id)
	}, []);

	if (isAuthenticated) {
		if (Object.keys(roomRequests).length !== 0) {
			if (roomRequests.status === 200) {
				return (
					<div>
						List of room requests
						{roomRequests.data.map(request => {
							return (
								<div>
									<p>{request.from_user.username} has been requested to join.</p>
									{request.status !== 'p' && status(request.status)}
									{request.status === 'p' &&
										<div>
											< button onClick={e => handleRequest(e, 'accept', request)}>Accept</button>
											<button onClick={e => handleRequest(e, 'reject', request)}>Reject</button>
										</div>
									}
								</div>
							)
						})}
					</div>
				);
			} else {
				return (
					<Navigate to={'/my-rooms/'}/>
				)
			}
		}

	} else {
		return (<Navigate to={'/login'}/>)
	}
}

export default RoomRequests;