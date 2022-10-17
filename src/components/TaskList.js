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
import TaskListHeader from "./TaskListHeader";
import PhaseBar from "./PhaseBar";

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
	const [editableTask, setEditableTask] = useState(null);
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
		await getRoomTasks(setTasks, filtered, id)
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

			{phases.length === 0 ?
				<div className={'text-center h-52 flex'}>
					<button className={'bg-blue-500 m-auto p-3 rounded-lg align-middle'}
							onClick={() => setShowPhaseModal(true)}>Start Management
					</button>
				</div>
				:
				<div>
					<TaskListHeader handleDeletePhase={handleDeletePhase} setShowModal={setShowModal}
									setShowPhaseModal={setShowPhaseModal}/>
					<PhaseBar changePhase={changePhase} phases={phases} selectedPhase={selectedPhase}/>
					{tasks.length === 0 ?
						<div className={'col-span-3 mr-3 text-center h-52 flex'}>
							<p className={'align-middle m-auto'}>Nothing to see in this phase ...</p>
						</div>
						:
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
									</tr>
									</thead>
									{tasks.length !== 0 && tasks.map(task => (
										<>
											{editableTask !== null &&
												<EditTaskModal
													showEditModal={showEditModal}
													setShowEditModal={setShowEditModal}
													members={roomDetail.data?.members}
													selectedPhase={selectedPhase}
													setTasks={setTasks}
													editableTask={editableTask}
													id={id}
												/>
											}
											<TaskCard setShowEditModal={setShowEditModal}
													  callGetTasks={callGetTasks}
													  setEditableTask={setEditableTask}
													  task={task}
													  roomId={id}
											/>
										</>
									))}
								</table>

							</div>
							<div className={'col-span-1 flex'}>
								<p className={'align-middle m-auto'}>
									process of tasks will shown here ...
								</p>
							</div>
						</div>
					}

				</div>
			}
		</div>
	);
}

export default TaskList;