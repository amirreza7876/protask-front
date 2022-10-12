import api from "../api";

const getRoomTasks = async (setPhases, setSelectedPhase, roomId) => {
	const response = await api.get(`/tasks/room-phases/`, {params: {roomId}})
	setSelectedPhase(response.data[0])
	setPhases(response.data)
	return response.data
}

export default getRoomTasks