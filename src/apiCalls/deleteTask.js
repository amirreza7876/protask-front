import api from "../api";

const deleteTask = async (taskId) => {
	console.log(taskId)
	const response = await api.delete('/tasks/delete/', {data: {'id': taskId}})
	console.log(response)
	return response
}

export default deleteTask;