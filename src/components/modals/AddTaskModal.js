import React, {useState} from 'react';
import handleLeaveBoard from "../../apiCalls/handleLeaveBoard";
import addTask from "../../apiCalls/addTask";
import getRoomTasks from "../../apiCalls/getRoomTasks";

function AddTaskModal({showModal, selectedPhase, id, setTasks, request_string, setShowModal, members}) {
	const [title, setTitle] = useState('');
	const [duration, setDuration] = useState('0');
	const [user, setUser] = useState('');
	const [difficulty, setDifficulty] = useState('');
	const [priority, setPriority] = useState('');
	const handleNewTask = async () => {
		const response = await addTask(title, duration, user, difficulty, priority, id, selectedPhase)
		setTitle('')
		setDuration('0')
		setUser('')
		setDifficulty('')
		setPriority('')
		if (response.status === 201) {
			await getRoomTasks(setTasks, id, request_string)
			setShowModal(false)
		}
	}

	return (
		showModal ? (<>
			<div
				className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
				<div className="relative w-full max-w-lg">
					{/*content*/}
					<div
						className="border-0 items-center rounded-lg backdrop-blur-sm shadow-lg relative flex flex-col w-full bg-black/20 outline-none focus:outline-none">
						<div>
							<p className="my-4 flex text-slate-200 leading-relaxed">
								Create New Task
							</p>
						</div>
						<div className={'w-2/3'}>
							<div className={'space-y-3 justify-center'}>
								<div>
									<label htmlFor="task_title" className={'text-slate-200 block'}>Name Your
										Task</label>
									<input type="text"
										   className={'bg-slate-800 w-full text-slate-200 p-1 px-2 border-0 outline-0 rounded-md'}
										   value={title}
										   onChange={e => setTitle(e.target.value)}
										   name="task_title" id=""/>
								</div>
								<div>
									<label htmlFor="duration" className={'text-slate-200 block'}>Duration</label>
									<input type="text"
										   className={'bg-slate-800 w-full text-slate-200 p-1 px-2 border-0 outline-0 rounded-md'}
										   value={duration}
										   onChange={e => setDuration(e.target.value)}
										   name="duration" id=""/>
								</div>
								<div className={'w-full'}>
									<label htmlFor="task_title" className={'text-slate-200'}>Assigned to</label>
									<select name="members"
											value={user}
											onChange={e => setUser(e.target.value)}
											className={'bg-slate-800 w-full text-slate-200 p-1 px-2 border-0 outline-0 rounded-md'}
											id="">
										{members.map(member => (
											<option value={member.username}>{member.username}</option>
										))}
										<option selected={true} value={''}>-- Select Member --</option>
									</select>
								</div>
								<div className={'grid'}>
									<label htmlFor="difficulty" className={'text-slate-200'}>Difficulty</label>
									<select name="difficulty"
											className={'bg-slate-800 text-slate-200 p-1 px-2 border-0 outline-0 rounded-md'}
											value={difficulty}
											onChange={e => setDifficulty(e.target.value)}
											id="">
										<option value="el">Elementary</option>
										<option value="e">Easy</option>
										<option value="m">Medium</option>
										<option value="h">Hard</option>
										<option selected={true} value={''}>-- Set Difficulty --</option>

									</select>
								</div>
								<div className={'grid'}>
									<label htmlFor="priority" className={'text-slate-200'}>Priority</label>
									<select name="priority"
											className={'bg-slate-800 text-slate-200 p-1 px-2 border-0 outline-0 rounded-md'}
											value={priority}
											onChange={e => setPriority(e.target.value)}
											id="">
										<option value="l">Low</option>
										<option value="me">Medium</option>
										<option value="ma">Major</option>
										<option value="sh">Showstopper</option>
										<option selected={true} value={''}>-- Set Priority --</option>

									</select>
								</div>
							</div>
							<div className={'float-left my-6'}>
								<button
									className="text-red-500 bg-slate-800 rounded background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
									type="button"
									onClick={() => setShowModal(false)}
								>
									Cancel
								</button>
								<button
									className="text-green-500 bg-slate-800 rounded background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
									type="button"
									onClick={handleNewTask}
								>
									Add
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="opacity-75 fixed inset-0 z-40 bg-black"></div>
		</>) : null
	);
}

export default AddTaskModal;