import React, {useContext, useEffect, useState} from 'react';
import {Navigate, useParams} from "react-router-dom";
import {userContext} from "../userContext";
import getRoomRequests from "../apiCalls/getRoomRequests";
import handleRequest from "../utils/handleRequest";
import status from "../utils/checkStatus";
import handleInvite from "../utils/handleInvite";
import getRoomInvites from "../apiCalls/getRoomInvites";

function RoomInvites(props) {
	const {id, requestString} = useParams()
	const [roomInvites, setRoomInvites] = useState({});
	const {isAuthenticated} = useContext(userContext)

	useEffect(() => {
		getRoomInvites(setRoomInvites, requestString, id)
	}, []);

	if (isAuthenticated) {
		if (Object.keys(roomInvites).length !== 0) {
			if (roomInvites.status === 200) {
				return (
					<div>
						List of room requests
						{roomInvites.data.map(invite => {
							return (
								<div>
									<p>{invite.for_user.username} has been invited.</p>
									{invite.status !== 'p' && status(invite.status)}
									{/*{invite.status === 'p' &&*/}
									{/*	<div>*/}
									{/*		<button onClick={e => handleInvite(e, 'accept', invite)}>Accept</button>*/}
									{/*		<button onClick={e => handleInvite(e, 'reject', invite)}>Reject</button>*/}
									{/*	</div>*/}
									{/*}*/}
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

export default RoomInvites;