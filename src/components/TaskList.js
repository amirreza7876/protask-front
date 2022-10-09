import React, {useContext, useEffect, useRef, useState} from 'react';
import TaskCard from "./TaskCard";
import getRoomDetail from "../apiCalls/getRoomDetail";
import getRoomTasks from "../apiCalls/getRoomTasks";
import {useParams} from "react-router-dom";
import {userContext} from "../userContext";
import {PlusIcon} from "@heroicons/react/20/solid";
import AddTagModal from "./modals/AddTagModal";
import AddTaskModal from "./modals/AddTaskModal";
import getRoomPhases from "../apiCalls/getRoomPhases";
import AddPhaseModal from "./modals/AddPhaseModal";
import {ChevronRightIcon} from "@heroicons/react/24/outline";
import EditTaskModal from "./modals/EditTaskModal";

function TaskList() {
	const {id} = useParams()
	const [roomDetail, setRoomDetail] = useState({});
	// const taskLoadedRef = useRef(false);
	const [showEditModal, setShowEditModal] = useState(false);
	const phaseLoadedRef = useRef(false);
	const [tasks, setTasks] = useState([]);
	const [phases, setPhases] = useState([]);
	const [showModal, setShowModal] = useState(false);
	const [showPhaseModal, setShowPhaseModal] = useState(false);
	const [selectedPhase, setSelectedPhase] = useState('');
	const [update, setUpdate] = useState(true);


	if (Object.keys(roomDetail).length !== 0 && !phaseLoadedRef.current) {
		getRoomPhases(setPhases, setSelectedPhase, id, roomDetail.data.request_string).then(r => {
		})
		phaseLoadedRef.current = true
	}

	const callGetTasks = async () => {

		if (Object.keys(roomDetail).length !== 0 && update) {
			await getRoomTasks(setTasks, selectedPhase, id, roomDetail.data.request_string)
			setUpdate(false)
		}
	}
	const changePhase = (selectedId) => {
		const filtered = phases.find(phase => phase.id === selectedId)
		setSelectedPhase(filtered)
		setTasks([])
		getRoomTasks(setTasks, filtered, id, roomDetail.data.request_string).then(r => {
		})
	}

	useEffect(() => {
		callGetTasks()
	}, [phases]);

	useEffect(() => {
		getRoomDetail(setRoomDetail, id).then(r => {
		})
		callGetTasks().then(r => {
		})
	}, []);
	return (
		<div className={'col-span-4 ml-3'}>
			<AddTaskModal selectedPhase={selectedPhase} showModal={showModal} setTasks={setTasks}
						  request_string={roomDetail.data?.request_string}
						  id={id} setShowModal={setShowModal} members={roomDetail.data?.members}/>
			<AddPhaseModal showPhaseModal={showPhaseModal} setPhases={setPhases} setShowPhaseModal={setShowPhaseModal}
						   request_string={roomDetail.data?.request_string} id={id}/>
			<div className={'bg-slate-900 text-white -ml-3 flex justify-between'}>
				<div className={'flex gap-4'}>
					<button className={'flex hover:bg-indigo-600 p-4'} onClick={() => setShowModal(true)}>
						<PlusIcon className={'h-5 w-5 self-center'}/>
						Task
					</button>
					<button className={'flex hover:bg-indigo-600 p-4'} onClick={() => setShowPhaseModal(true)}>
						<PlusIcon className={'h-5 w-5 self-center'}/>
						<p>Phase</p>
					</button>
				</div>
				<div className={'flex'}>
					<button className={'flex hover:bg-indigo-600 p-4'}>
						<p>Delete Phase</p>
					</button>
				</div>
			</div>
			<div
				className={'flex gap-2 mt-3 overflow-x-auto py-2 mr-3 rounded bg-slate-300 shadow-[0_0px_4px_4px_rgb(203,213,225)] text-gray-600 '}>
				{phases.length !== 0 &&
					phases.map(phase => (
						<button key={phase.id}
								onClick={() => changePhase(phase.id)}
								className={`flex-shrink-0 cursor-pointer px-4 py-2 hover:bg-slate-400 hover:text-white rounded-lg 
								${selectedPhase.id === phase.id && 'bg-slate-400 text-white'} flex`}>
							<ChevronRightIcon className={'h-4 w-4 self-center mr-2'}/>
							<p>
								{phase.name}
							</p>

						</button>
					))}
			</div>

			<div className={'grid grid-cols-3'}>
				<div className={'mt-3 col-span-2'}>
					<table className={'w-full'}>
						<thead>
						<tr>
							<th className={'text-center text-slate-500'}>Title</th>
							<th className={'text-center text-slate-500'}>Duration</th>
							<th className={'text-center text-slate-500'}>Assigned To</th>
							<th className={'text-center text-slate-500'}>Priority</th>
							<th className={'text-center text-slate-500'}>Difficulty</th>
							<th className={'text-center text-slate-500'}>Status</th>
							<th className={'text-left text-slate-500'}>Done</th>
						</tr>
						</thead>
						{tasks.length !== 0 && tasks.map(task => (
							<>
								<EditTaskModal showEditModal={showEditModal} setShowEditModal={setShowEditModal}
											   task={task} members={roomDetail.data?.members}/>
								<TaskCard setUpdate={setUpdate} setShowEditModal={setShowEditModal} members={roomDetail.data?.members} task={task}/>
							</>
						))}
					</table>
				</div>
				<div className={'col-span-1'}>
				</div>
			</div>
		</div>
	);
}

export default TaskList;