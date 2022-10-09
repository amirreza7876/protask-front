import React, {useState} from 'react';
import priorityStatus from "../utils/checkTaskPriorityStatus";
import taskStatus from "../utils/checkTaskStatus";
import changeTask from "../apiCalls/changeTask";
import difficultyStatus from "../utils/checkTaskDifficultyStatus";
import checkTaskDifficultyStatus from "../utils/checkTaskDifficultyStatus";
import {PencilIcon} from "@heroicons/react/24/outline";

function TaskCard({task,setShowEditModal, members, setUpdate}) {
	const [title, setTitle] = useState(task.title);
	const [duration, setDuration] = useState(task.duration);
	const [username, setUsername] = useState(task.user.username);
	const [priority, setPriority] = useState(task.priority);
	const [difficulty, setDifficulty] = useState(task.difficulty);
	const [status, setStatus] = useState(task.status)
	const [done, setDone] = useState(task.done);

	// const handleChangeTask = async (e, field) => {
	// 	switch (field) {
	// 		case 'user':
	// 			await changeTask(e.target.value, 'user', task.id)
	// 			break
	// 		case 'priority':
	// 			await changeTask(e.target.value, 'priority', task.id)
	// 			break
	// 		case 'done':
	// 			setDone(!done)
	// 			setUpdate(true)
	// 			await changeTask(e.target.checked, 'done', task.id)
	// 			break
	// 	}
	// }

	return (
		<tr className={`border-l-8 border-t border-t-slate-200
				${task.difficulty === 'el' ? 'border-cyan-500':undefined}
				${task.difficulty === 'e' ? 'border-emerald-500':undefined}
				${task.difficulty === 'm' ? 'border-yellow-400':undefined}
				${task.difficulty === 'h' ? 'border-red-600':undefined}`}>
			<td className={'text-center'}>
				<h5>
					{title}
				</h5>
			</td>
			<td className={'text-center'}>
				<p>{duration}</p>
			</td>
			<td className={'text-center'}>
				<p>{username}</p>
			</td>
			<td className={'text-center'}>
				<p>{priorityStatus(priority)}</p>
			</td>
			<td className={'text-center'}>
				<p>{checkTaskDifficultyStatus(difficulty)}</p>
			</td>
			<td className={'text-center'}>
				<p>{taskStatus(status)}</p>
			</td>
			<td className={''}>
				<label htmlFor="default-toggle" className="relative cursor-pointer">
					<input type="checkbox" value="" id="default-toggle" className="sr-only peer"/>
					<div
						className="w-11 h-6 bg-gray-200  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
				</label>
			</td>
			<td>
				<PencilIcon onClick={()=>setShowEditModal(true)} className={'h-8 w-8 cursor-pointer rounded-lg hover:bg-slate-200 p-2'}/>
			</td>
		</tr>
	);
}

export default TaskCard;