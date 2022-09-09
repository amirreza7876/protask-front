import api from "../api";

const getRoomTasks = async (setTasks, roomId, requestString) => {
	const response = await api.get(`/tasks/room-tasks/`, {params: {roomId, requestString}})
	setTasks(response.data)
}

export default getRoomTasks