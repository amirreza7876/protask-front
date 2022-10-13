import api from "../api";

const getRoomTasks = async (setTasks, selectedPhase, roomId) => {
	const phaseName = selectedPhase.name
	const phaseId = selectedPhase.id
	const response = await api.get(`/tasks/room-tasks/`, {params: {roomId, phaseName, phaseId}})
	setTasks(response.data)
	return response
}

export default getRoomTasks