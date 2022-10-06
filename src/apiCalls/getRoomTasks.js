import api from "../api";

const getRoomTasks = async (setTasks, selectedPhase, roomId, requestString) => {
	const phaseName = selectedPhase.name
	const phaseId = selectedPhase.id
	const response = await api.get(`/tasks/room-tasks/`, {params: {roomId, requestString, phaseName, phaseId}})
	setTasks(response.data)
}

export default getRoomTasks