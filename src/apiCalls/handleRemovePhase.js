import api from "../api";

const handleRemovePhase = async (phaseId, roomId) => {
	return await api.delete('/tasks/delete_phase/', {data: {phaseId, roomId}})
}

export default handleRemovePhase