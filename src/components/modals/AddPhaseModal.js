import React, {useState} from 'react';
import addTask from "../../apiCalls/addTask";
import getRoomPhases from "../../apiCalls/getRoomPhases";
import addPhase from "../../apiCalls/addPhase";

function AddPhaseModal({showPhaseModal, id, setPhases, setSelectedPhase, setShowPhaseModal}) {
	const [name, setName] = useState('');

	const handleNewPhase = async () => {
		const response = await addPhase(name, id)
		setName('')
		if (response.status === 201) {
			setShowPhaseModal(false)
			await getRoomPhases(setPhases, setSelectedPhase, id)
		}
	}

	return (
		showPhaseModal ? (<>
			<div
				className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
				<div className="relative w-full max-w-lg">
					{/*content*/}
					<div
						className="border-0 items-center rounded-lg backdrop-blur-sm shadow-lg relative flex flex-col w-full bg-black/20 outline-none focus:outline-none">
						<div>
							<p className="my-4 flex text-slate-200 leading-relaxed">
								Create New Phase
							</p>
						</div>
						<div className={'w-2/3'}>
							<div className={'space-y-3 justify-center'}>
								<div>
									<label htmlFor="task_title" className={'text-slate-200 block'}>Phase Name</label>
									<input type="text"
										   className={'bg-slate-800 w-full text-slate-200 p-1 px-2 border-0 outline-0 rounded-md'}
										   value={name}
										   onChange={e => setName(e.target.value)}
										   name="task_title" id=""/>
								</div>
							</div>
							<div className={'float-left my-6'}>
								<button
									className="text-red-500 bg-slate-800 rounded background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
									type="button"
									onClick={() => setShowPhaseModal(false)}
								>
									Cancel
								</button>
								<button
									className="text-green-500 bg-slate-800 rounded background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
									type="button"
									onClick={handleNewPhase}
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

export default AddPhaseModal;