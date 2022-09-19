import React from 'react';
import {ArrowTopRightOnSquareIcon, CheckIcon} from "@heroicons/react/20/solid";
import priorityStatus from "../utils/checkTaskPriorityStatus";
import taskStatus from "../utils/checkTaskStatus";

function TaskCard({task}) {
	console.log(task)
	return (
		<tr className={`border-l-4 border-t border-t-slate-200
				${task.difficulty === 'el' && 'border-cyan-500'}
				${task.difficulty === 'e' && 'border-emerald-500'}
				${task.difficulty === 'm' && 'border-yellow-400'}
				${task.difficulty === 'h' && 'border-red-600'}`}>
			<td className={'pl-3'}>
				<h5>
					{task.title}
				</h5>
			</td>
			<td>
				<p>{task.duration}</p>
			</td>
			<td>
				<p>{task.user.username}</p>
			</td>
			<td>
				<p>{priorityStatus(task.priority)}</p>
			</td>
			<td>
				<p>{taskStatus(task.status)}</p>
			</td>
			<td>
				<input type="checkbox" value={task.done} name="" id=""/>
			</td>

		</tr>
	);
}

export default TaskCard;