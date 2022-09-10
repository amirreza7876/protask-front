import React from 'react';
import {ArrowTopRightOnSquareIcon, CheckIcon} from "@heroicons/react/20/solid";

function TaskCard({task}) {
	console.log(task)
	return (<div className={`border-l-4
				${task.difficulty === 'el' && 'border-cyan-500'}
				${task.difficulty === 'e' && 'border-emerald-500'}
				${task.difficulty === 'm' && 'border-yellow-400'}
				${task.difficulty === 'h' && 'border-red-600'}`}
	>
		<div
			className={`p-3 mt-3 max-w-sm bg-white rounded-r-lg border border-gray-200 shadow-md bg-indigo-100`}>
			<div className={'flex relative'}>
				<h5 className="text-lg tracking-tight text-gray-900	">
					{task.title}
				</h5>
				{task.done && <CheckIcon className={'ml-4 text-emerald-600 h-6 w-6 self-center absolute right-0'}/>}
			</div>

			<button className="inline-flex items-center text-blue-600 hover:underline"
					onClick={() => alert('create modal for this')}>
				Show More Details
				<ArrowTopRightOnSquareIcon className="ml-2 w-5 h-5"/>
			</button>
		</div>
	</div>);
}

export default TaskCard;