import api from "../api";

const deleteTask = async (taskId, roomId) => {
	return await api.delete('/tasks/delete/', {data: {taskId, roomId}}).catch(err => err.response)
}

export default deleteTask;