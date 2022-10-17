import React, {useContext, useEffect, useState} from 'react';
import {userContext} from "../userContext";
import {Navigate} from "react-router-dom";
import getRooms from "../apiCalls/getRooms";
import MainLayout from "../layouts/MainLayout";

import RoomCard from "../components/RoomCard";


function MyRooms() {
	const [rooms, setRooms] = useState([]);
	const {isAuthenticated} = useContext(userContext)
	useEffect(() => {
		getRooms(setRooms)
	}, []);

	if (isAuthenticated) {
		return (<MainLayout className={'bg-gradient-to-b from-blue-200 via-blue-500 to-blue-500 h-screen'}>
			<div className={'grid-cols-4 grid gap-5 pt-10 max-w-6xl m-auto '}>
				{/*TODO move this to another file*/}
				{rooms.length !== 0 && rooms.map((room, index) => (
					<div key={index}>
						<RoomCard setRooms={setRooms} room={room}/>
					</div>
				))}
			</div>
		</MainLayout>);
	} else {
		return (<Navigate to={'/login'}/>)
	}
}

export default MyRooms;