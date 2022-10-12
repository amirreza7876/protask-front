import React, {useState} from 'react';
import handleLeaveBoard from "../../apiCalls/handleLeaveBoard";
import {ExclamationTriangleIcon} from "@heroicons/react/24/outline";
import changeTask from "../../apiCalls/changeTask";
import getRoomTasks from "../../apiCalls/getRoomTasks";

function EditModalTask({showEditModal, setShowEditModal, task, members, id, setTasks, selectedPhase}) {
	const [title, setTitle] = useState(task.title);
	const [duration, setDuration] = useState(task.duration);
	const [user, setUser] = useState(task.user.username);
	const [difficulty, setDifficulty] = useState(task.difficulty);
	const [priority, setPriority] = useState(task.priority);
	const applyChanges = async () => {
		await changeTask({title, duration, user, difficulty, priority}, task.id)
		setShowEditModal(false)
		//TODO update task after update
		await getRoomTasks(setTasks, selectedPhase, id)
	}
	return (showEditModal ? (<>
		<div
			className="justify-center items-center  flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
			<div className="relative w-full max-w-lg">
				{/*content*/}
				<div
					className="pt-10 border-0 items-center rounded-lg backdrop-blur-sm shadow-lg relative flex flex-col w-full bg-black/20 outline-none focus:outline-none">
					<div className={'w-2/3'}>
						<div className={'space-y-3 justify-center'}>
							<div>
								<label htmlFor="task_title" className={'text-slate-200 block'}>Title</label>
								<input type="text"
									   onChange={e => setTitle(e.target.value)}
									   className={'bg-slate-800 w-full text-slate-200 p-1 px-2 border-0 outline-0 rounded-md'}
									   value={title} name="" id=""/>
							</div>
							<div>
								<label htmlFor="task_title" className={'text-slate-200 block'}>Duration</label>
								<input type="text"
									   onChange={e => setDuration(e.target.value)}
									   className={'bg-slate-800 w-full text-slate-200 p-1 px-2 border-0 outline-0 rounded-md'}
									   value={duration} name="" id=""/>
							</div>
							<div>
								<label htmlFor="task_title" className={'text-slate-200 block'}>User</label>
								<select name="assignedTo"
										onChange={e => setUser(e.target.value)}
										className={'bg-slate-800 w-full text-slate-200 p-1 px-2 border-0 outline-0 rounded-md'}
										defaultValue={user} id="">
									{members.map(member => (
										<option name="" value={member.username} id="">{member.username}</option>
									))}
								</select>
							</div>

							<div>
								<label htmlFor="task_title" className={'text-slate-200 block'}>Difficulty</label>
								<select name=""
										onChange={e => setDifficulty(e.target.value)}
										defaultValue={difficulty}
										className={'bg-slate-800 w-full text-slate-200 p-1 px-2 border-0 outline-0 rounded-md'}
										id="">
									<option value="el">Elementary</option>
									<option value="e">Easy</option>
									<option value="m">Medium</option>
									<option value="h">Hard</option>
								</select>
							</div>
							<div>
								<label htmlFor="task_title" className={'text-slate-200 block'}>Priority</label>
								<select name=""
										onChange={e => setPriority(e.target.value)}
										defaultValue={priority}
										className={'bg-slate-800 w-full text-slate-200 p-1 px-2 border-0 outline-0 rounded-md'}
										id="">
									<option value="l">Low</option>
									<option value="me">Medium</option>
									<option value="ma">Major</option>
									<option value="sh">Showstopper</option>
								</select>
							</div>
						</div>

					</div>

					<div className={'float-left my-6'}>
						<button
							className="text-red-500 bg-slate-800 rounded background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
							type="button"
							onClick={() => setShowEditModal(false)}
						>
							Cancel
						</button>
						<button
							className="text-green-500 bg-slate-800 rounded background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
							type="button"
							onClick={() => applyChanges(false)}
						>
							Apply
						</button>
					</div>
				</div>
			</div>
		</div>
		<div className="opacity-75 fixed inset-0 z-40 bg-black"></div>
	</>) : null);
}

export default EditModalTask;