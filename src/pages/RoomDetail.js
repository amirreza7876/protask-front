import React, {useContext, useEffect, useRef, useState} from 'react';
import {Link, Navigate, Outlet, useParams} from "react-router-dom";
import getRoomDetail from "../apiCalls/getRoomDetail";
import {userContext} from "../userContext";
import MainLayout from "../layouts/MainLayout";
import {
	ArrowDownIcon, Bars3CenterLeftIcon, ChevronDownIcon, ChevronUpIcon, UserCircleIcon
} from "@heroicons/react/20/solid";
import RoomDetailSidebar from "../components/RoomDetailSidebar";
import getRoomTasks from "../apiCalls/getRoomTasks";
import TaskCard from "../components/TaskCard";

function RoomDetail(props) {
	const {id} = useParams()
	const [roomDetail, setRoomDetail] = useState({});
	const loadedRef = useRef(false);
	const [tasks, setTasks] = useState([]);
	const [showMembers, setShowMembers] = useState(false);
	const {isAuthenticated} = useContext(userContext)

	useEffect(() => {
		getRoomDetail(setRoomDetail, id)
	}, []);
	if (Object.keys(roomDetail).length !== 0 && !loadedRef.current) {
		getRoomTasks(setTasks, id, roomDetail.data.request_string)
		loadedRef.current = true
	}


	if (isAuthenticated) {
		if (roomDetail.status === 404) {
			return (<Navigate to={'/dashboard'}/>)
		} else if (Object.keys(roomDetail).length !== 0) {
			return (<MainLayout>
				<div className={'grid grid-cols-5'}>
					<RoomDetailSidebar roomDetail={roomDetail} showMembers={showMembers}
									   setShowMembers={setShowMembers}/>
					{/*TASK LIST*/}
					<div className={'col-span-4 ml-3'}>
						<div className={'bg-cyan-200 p-4 -ml-3'}>
							NAVBAR to create new list and tasks and all room settings
						</div>
						<div className={''}>
							{tasks.length !== 0 && tasks.map(task => (<TaskCard task={task}/>))}
						</div>
					</div>
				</div>
			</MainLayout>);
		}
	} else {
		return (<Navigate to={'/login'}/>)
	}
}

export default RoomDetail;