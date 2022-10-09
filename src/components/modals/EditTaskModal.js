import React from 'react';
import handleLeaveBoard from "../../apiCalls/handleLeaveBoard";
import {ExclamationTriangleIcon} from "@heroicons/react/24/outline";

function EditModalTask({showEditModal, setShowEditModal, task, members}) {
	console.log(task)
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
									   className={'bg-slate-800 w-full text-slate-200 p-1 px-2 border-0 outline-0 rounded-md'}
									   value={task.title} name="" id=""/>
							</div>
							<div>
								<label htmlFor="task_title" className={'text-slate-200 block'}>Duration</label>
								<input type="text"
									   className={'bg-slate-800 w-full text-slate-200 p-1 px-2 border-0 outline-0 rounded-md'}
									   value={task.duration} name="" id=""/>
							</div>
							<div>
								<label htmlFor="task_title" className={'text-slate-200 block'}>User</label>
								<select name="assignedTo"
										className={'bg-slate-800 w-full text-slate-200 p-1 px-2 border-0 outline-0 rounded-md'}
										defaultValue={task.user.username} id="">
									{members.map(member => (
										<option name="" value={member.username} id="">{member.username}</option>
									))}
								</select>
							</div>

							<div>
								<label htmlFor="task_title" className={'text-slate-200 block'}>Difficulty</label>
								<select name=""
										defaultValue={task.difficulty}
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
										defaultValue={task.priority}
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
							onClick={() => setShowEditModal(false)}
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