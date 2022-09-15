import React, {useContext, useEffect, useRef, useState} from 'react';
import TaskCard from "./TaskCard";
import getRoomDetail from "../apiCalls/getRoomDetail";
import getRoomTasks from "../apiCalls/getRoomTasks";
import {useParams} from "react-router-dom";
import {userContext} from "../userContext";
import {PlusIcon} from "@heroicons/react/20/solid";

function TaskList() {
	const {id} = useParams()
	const [roomDetail, setRoomDetail] = useState({});
	const loadedRef = useRef(false);
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		getRoomDetail(setRoomDetail, id)
	}, []);
	if (Object.keys(roomDetail).length !== 0 && !loadedRef.current) {
		getRoomTasks(setTasks, id, roomDetail.data.request_string)
		loadedRef.current = true
	}
	console.log(tasks)
	return (
		<div className={'col-span-4 ml-3'}>
			<div className={'bg-slate-900 text-white -ml-3 flex justify-between'}>
				<div className={'flex gap-4'}>
					<p className={'p-4'}>
						left items
					</p>
					<button className={'flex hover:bg-indigo-600 p-4'}>
						<PlusIcon className={'h-5 w-5 self-center'}/>
						Add Task
					</button>
					<button className={'flex hover:bg-indigo-600 p-4'}>
						<PlusIcon className={'h-5 w-5 self-center'}/>
						<p>Add List</p>
					</button>
				</div>
				<div className={'flex'}>
					<p className={'p-4'}>
						right items
					</p>
				</div>
			</div>
			<div>
				{tasks.length !== 0 && tasks.map(task => (<TaskCard task={task}/>))}
			</div>
		</div>
	);
}

export default TaskList;