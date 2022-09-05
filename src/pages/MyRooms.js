import React, {useContext, useEffect, useState} from 'react';
import {userContext} from "../userContext";
import {Link, Navigate} from "react-router-dom";
import getRooms from "../apiCalls/getRooms";


function MyRooms() {
	const [rooms, setRooms] = useState([]);
	const {isAuthenticated} = useContext(userContext)

	useEffect(() => {
		getRooms(setRooms)
	}, []);

	if (isAuthenticated) {
		return (
			<div>
				My rooms
				{rooms.length !== 0 && rooms.map(room => (
					<p key={room.id}>
						<Link to={`/room/${room.id}`}>
							{room.name}
						</Link>
					</p>
				))}
			</div>);
	} else {
		return (<Navigate to={'/login'}/>)
	}
}

export default MyRooms;