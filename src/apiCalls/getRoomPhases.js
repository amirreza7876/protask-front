import api from "../api";

const getRoomTasks = async (setPhases, setSelectedPhase, roomId, requestString) => {
	const response = await api.get(`/tasks/room-phases/`, {params: {roomId, requestString}})
	setSelectedPhase(response.data[0])
	setPhases(response.data)
	return response.data
}

export default getRoomTasks