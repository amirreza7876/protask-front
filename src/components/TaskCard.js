import React, {useState} from 'react';
import priorityStatus from "../utils/checkTaskPriorityStatus";
import taskStatus from "../utils/checkTaskStatus";
import changeTask from "../apiCalls/changeTask";
import difficultyStatus from "../utils/checkTaskDifficultyStatus";

function TaskCard({task, members, setUpdate}) {
	const [title, setTitle] = useState(task.title);
	const [duration, setDuration] = useState(task.duration);
	const [username, setUsername] = useState(task.user.username);
	const [priority, setPriority] = useState(task.priority);
	const [difficulty, setDifficulty] = useState(task.difficulty);
	const [status, setStatus] = useState(task.status)
	const [done, setDone] = useState(task.done);

	const handleChangeTask = async (e, field) => {
		switch (field) {
			case 'user':
				await changeTask(e.target.value, 'user', task.id)
				break
			case 'priority':
				await changeTask(e.target.value, 'priority', task.id)
				break
			case 'done':
				setDone(!done)
				setUpdate(true)
				await changeTask(e.target.checked, 'done', task.id)
				break
		}
	}

	return (
		<tr className={`border-l-4 border-t border-t-slate-200
				${task.difficulty === 'el' && 'border-cyan-500'}
				${task.difficulty === 'e' && 'border-emerald-500'}
				${task.difficulty === 'm' && 'border-yellow-400'}
				${task.difficulty === 'h' && 'border-red-600'}`}>
			<td className={'pl-3'}>
				<h5>
					{title}
				</h5>
			</td>
			<td>
				<p>{duration}</p>
			</td>
			<td>
				<select name="" id="" onChange={(e) => handleChangeTask(e, 'user')}>
					{members.map(member => (
						<option value={member.username}
								selected={member.username === username}>{member.username}</option>
					))}
				</select>
			</td>
			<td>
				<select name="" id="" onChange={(e) => handleChangeTask(e, 'priority')}>
					<option selected={priorityStatus(priority) === 'Low'} value="l">Low</option>
					<option selected={priorityStatus(priority) === 'Medium'} value="me">Medium</option>
					<option selected={priorityStatus(priority) === 'Major'} value="ma">Major</option>
					<option selected={priorityStatus(priority) === "Show Stopper"} value="sh">Show Stopper</option>
					{/*<option>{priorityStatus(priority)}</option>*/}
				</select>
			</td>
			<td>
				<select name="" id="" onChange={(e) => handleChangeTask(e, 'difficulty')}>
					<option selected={difficultyStatus(difficulty) === 'Easy'} value="e">Easy</option>
					<option selected={difficultyStatus(difficulty) === 'Elementary'} value="el">Elementary</option>
					<option selected={difficultyStatus(difficulty) === 'Medium'} value="m">Medium</option>
					<option selected={difficultyStatus(difficulty) === "Hard"} value="h">Hard</option>
					{/*<option>{priorityStatus(priority)}</option>*/}
				</select>
			</td>
			<td>
				<p>{taskStatus(status)}</p>
			</td>
			<td>
				<label htmlFor="default-toggle" className="inline-flex relative items-center cursor-pointer">
					<input type="checkbox" value="" id="default-toggle" className="sr-only peer"
						   onChange={(e) => handleChangeTask(e, 'done')} checked={done}/>
					<div
						className="w-11 h-6 bg-gray-200  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
				</label>
				{/*<input type="checkbox" className={'border-0 outline-0 check w-6 h-6 border-l-8'}*/}
				{/*	   onChange={(e) => handleChangeTask(e, 'done')} checked={done} name="" id=""/>*/}
			</td>

		</tr>
	);
}

export default TaskCard;