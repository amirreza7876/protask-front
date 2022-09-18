import React, {useContext, useEffect, useRef, useState} from 'react';
import {Navigate, Outlet, useParams} from "react-router-dom";
import getRoomDetail from "../apiCalls/getRoomDetail";
import {userContext} from "../userContext";
import MainLayout from "../layouts/MainLayout";
import RoomDetailSidebar from "../components/RoomDetailSidebar";
import getRoomTasks from "../apiCalls/getRoomTasks";

function RoomDetail() {
	const {id} = useParams()
	const {isAuthenticated} = useContext(userContext)
	const [roomDetail, setRoomDetail] = useState({});

	useEffect(() => {
		getRoomDetail(setRoomDetail, id)
	}, []);


	if (isAuthenticated) {
		if (roomDetail.status === 404) {
			return (<Navigate to={'/dashboard'}/>)
		} else if (Object.keys(roomDetail).length !== 0) {
			return (
				<MainLayout>
					<div className={'grid grid-cols-5'}>
						<RoomDetailSidebar setRoomDetail={setRoomDetail} roomDetail={roomDetail}/>
						<Outlet/>
					</div>
				</MainLayout>
			);
		}
	} else {
		return (<Navigate to={'/login'}/>)
	}
}

export default RoomDetail;