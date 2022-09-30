import React, {useContext, useEffect, useRef, useState} from 'react';
import TaskCard from "./TaskCard";
import getRoomDetail from "../apiCalls/getRoomDetail";
import getRoomTasks from "../apiCalls/getRoomTasks";
import {useParams} from "react-router-dom";
import {userContext} from "../userContext";
import {PlusIcon} from "@heroicons/react/20/solid";
import AddTagModal from "./modals/AddTagModal";
import AddTaskModal from "./modals/AddTaskModal";

function TaskList() {
	const {id} = useParams()
	const [roomDetail, setRoomDetail] = useState({});
	const loadedRef = useRef(false);
	const [tasks, setTasks] = useState([]);
	const [showModal, setShowModal] = useState(false);

	useEffect(() => {
		getRoomDetail(setRoomDetail, id)
	}, []);

	if (Object.keys(roomDetail).length !== 0 && !loadedRef.current) {
		getRoomTasks(setTasks, id, roomDetail.data.request_string)
		loadedRef.current = true
	}

	return (
		<div className={'col-span-4 ml-3'}>
			<AddTaskModal showModal={showModal} setTasks={setTasks} request_string={roomDetail.data?.request_string}
						  id={id} setShowModal={setShowModal} members={roomDetail.data?.members}/>

			<div className={'bg-slate-900 text-white -ml-3 flex justify-between'}>
				<div className={'flex gap-4'}>
					<p className={'p-4'}>
						left items
					</p>
					<button className={'flex hover:bg-indigo-600 p-4'} onClick={() => setShowModal(true)}>
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
			<div className={'grid grid-cols-3'}>
				<div className={'mt-3 col-span-2'}>
					<table className={'w-full'}>
						<tr>
							<th className={'text-left text-slate-500'}>Title</th>
							<th className={'text-left text-slate-500'}>Duration</th>
							<th className={'text-left text-slate-500'}>Assigned To</th>
							<th className={'text-left text-slate-500'}>Priority</th>
							<th className={'text-left text-slate-500'}>Difficulty</th>
							<th className={'text-left text-slate-500'}>Status</th>
							<th className={'text-left text-slate-500'}>Done</th>
						</tr>
						{tasks.length !== 0 && tasks.map(task => (<TaskCard members={roomDetail.data?.members} task={task}/>))}
					</table>
				</div>
				<div className={'col-span-1'}>
				</div>
			</div>
		</div>
	);
}

export default TaskList;