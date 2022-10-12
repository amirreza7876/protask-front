import React, {useEffect, useState} from 'react';
import TaskCard from "./TaskCard";
import getRoomDetail from "../apiCalls/getRoomDetail";
import getRoomTasks from "../apiCalls/getRoomTasks";
import {useParams} from "react-router-dom";
import {PlusIcon} from "@heroicons/react/20/solid";
import AddTaskModal from "./modals/AddTaskModal";
import getRoomPhases from "../apiCalls/getRoomPhases";
import AddPhaseModal from "./modals/AddPhaseModal";
import EditTaskModal from "./modals/EditTaskModal";
import DeletePhaseModal from "./modals/DeletePhaseModal";

function TaskList() {
	const {id} = useParams()
	const [roomDetail, setRoomDetail] = useState({});
	const [showEditModal, setShowEditModal] = useState(false);
	const [tasks, setTasks] = useState([]);
	const [phases, setPhases] = useState([]);
	const [showModal, setShowModal] = useState(false);
	const [showDeletePhaseModal, setShowDeletePhaseModal] = useState(false);
	const [showPhaseModal, setShowPhaseModal] = useState(false);
	const [selectedPhase, setSelectedPhase] = useState('');

	const callGetPhases = async () => {
		if (Object.keys(roomDetail).length !== 0) {
			await getRoomPhases(setPhases, setSelectedPhase, id, roomDetail.data.request_string)
		}
	}
	const callGetTasks = async () => {
		if (Object.keys(roomDetail).length !== 0) {
			await getRoomTasks(setTasks, selectedPhase, id)
			console.log('done')
		}
	}
	const changePhase = async (selectedId) => {
		const filtered = phases.find(phase => phase.id === selectedId)
		setSelectedPhase(filtered)
		setTasks([])
		await getRoomTasks(setTasks, filtered, id, roomDetail.data.request_string)
	}
	const handleDeletePhase = () => {
		setShowDeletePhaseModal(true)
	}

	useEffect(() => {
		callGetTasks().then(r => {
		})
	}, [phases]);
	useEffect(() => {
		callGetPhases().then(r => {
		})
		callGetTasks().then(r => {
		})
	}, [roomDetail]);
	useEffect(() => {
		getRoomDetail(id).then(r => {
			setRoomDetail({data: r.data, status: r.status})
		})
	}, []);

	return (
		<div className={'col-span-4 ml-3'}>
			<AddTaskModal selectedPhase={selectedPhase}
						  showModal={showModal}
						  setTasks={setTasks}
						  request_string={roomDetail.data?.request_string}
						  id={id}
						  setShowModal={setShowModal}
						  members={roomDetail.data?.members}/>
			<AddPhaseModal showPhaseModal={showPhaseModal}
						   setPhases={setPhases}
						   setSelectedPhase={setSelectedPhase}
						   setShowPhaseModal={setShowPhaseModal}
						   id={id}/>
			<DeletePhaseModal showDeletePhaseModal={showDeletePhaseModal}
							  setShowDeletePhaseModal={setShowDeletePhaseModal}
							  selectedPhase={selectedPhase}
							  setSelectedPhase={setSelectedPhase}
							  setPhases={setPhases}
							  roomId={id}
			/>
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
					<button className={'flex hover:bg-indigo-600 p-4'} onClick={handleDeletePhase}>
						<p>Delete Phase</p>
					</button>
				</div>
			</div>
			<div
				className={'flex gap-2 mt-3 overflow-x-auto py-2 mr-3 rounded border-b-2 text-gray-600 '}>
				{phases.length !== 0 ?
					phases.map(phase => (
						<button key={phase.id}
								onClick={() => changePhase(phase.id)}
								className={`flex-shrink-0 text-gray-600 cursor-pointer px-4 py-2 hover:bg-slate-300 hover:text-gray-800 hover:shadow-md hover:shadow-slate-300 rounded-lg 
								${selectedPhase.id === phase.id && 'bg-slate-200'} flex`}>
							{/*<ChevronRightIcon className={'h-4 w-4 self-center mr-2'}/>*/}
							<p>
								{phase.name}
							</p>

						</button>
					)) :
					(
						<p>no phases</p>
					)
				}
			</div>

			<div className={'grid grid-cols-3'}>
				<div className={'mt-3 col-span-2'}>
					<table className={'w-full'}>
						<thead className={'border-b-2'}>
						<tr>
							<th className={'text-center text-slate-500'}>Title</th>
							<th className={'text-center text-slate-500'}>Duration</th>
							<th className={'text-center text-slate-500'}>Assigned To</th>
							<th className={'text-center text-slate-500'}>Priority</th>
							<th className={'text-center text-slate-500'}>Difficulty</th>
							<th className={'text-center text-slate-500'}>Status</th>
							{/*<th className={'text-center text-slate-500'}>Done</th>*/}
						</tr>
						</thead>
						{tasks.length !== 0 && tasks.map(task => (
							<>
								<EditTaskModal
									showEditModal={showEditModal}
									setShowEditModal={setShowEditModal}
									members={roomDetail.data?.members}
									task={task}
									id={id}
									setTasks={setTasks}
									selectedPhase={selectedPhase}
								/>
								<TaskCard setShowEditModal={setShowEditModal}
										  callGetTasks={callGetTasks}
										  roomId={id}
										  task={task}
								/>
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