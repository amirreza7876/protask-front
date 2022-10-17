import React from 'react';
import {PlusIcon} from "@heroicons/react/20/solid";

function TaskListHeader({setShowModal, setShowPhaseModal, handleDeletePhase}) {
	return (
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
	);
}

export default TaskListHeader;