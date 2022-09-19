import React from 'react';
import handleLeaveBoard from "../../apiCalls/handleLeaveBoard";

function AddTaskModal({showModal, setShowModal, members}) {
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
									<label htmlFor="task_title" className={'text-slate-200 block'}>Name Your Task</label>
									<input type="text"
										   className={'bg-slate-800 w-full text-slate-200 p-1 px-2 border-0 outline-0 rounded-md'}
										   name="task_title" id=""/>
								</div>
								<div>
									<label htmlFor="duration" className={'text-slate-200 block'}>Duration</label>
									<input type="text"
										   className={'bg-slate-800 w-full text-slate-200 p-1 px-2 border-0 outline-0 rounded-md'}
										   name="duration" id=""/>
								</div>
								<div className={'w-full'}>
									<label htmlFor="task_title" className={'text-slate-200'}>Assigned to</label>
									<select name="members"
											className={'bg-slate-800 w-full text-slate-200 p-1 px-2 border-0 outline-0 rounded-md'}
											id="">
										{members.map(member => (
											<option value={member.username}>{member.username}</option>
										))}
									</select>
								</div>
								<div className={'grid'}>
									<label htmlFor="difficulty" className={'text-slate-200'}>Difficulty</label>
									<select name="difficulty"
											className={'bg-slate-800 text-slate-200 p-1 px-2 border-0 outline-0 rounded-md'}
											id="">
										<option value="elementary">Elementary</option>
										<option value="easy">Easy</option>
										<option value="medium">Medium</option>
										<option value="hard">Hard</option>
									</select>
								</div>
								<div className={'grid'}>
									<label htmlFor="priority" className={'text-slate-200'}>Priority</label>
									<select name="priority"
											className={'bg-slate-800 text-slate-200 p-1 px-2 border-0 outline-0 rounded-md'}
											id="">
										<option value="low">Low</option>
										<option value="medium">Medium</option>
										<option value="major">Major</option>
										<option value="showstopper">Showstopper</option>
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
									onClick={() => setShowModal(false)}
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