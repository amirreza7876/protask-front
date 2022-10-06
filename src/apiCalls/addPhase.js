import api from "../api";

const addPhase = async (name, id) => {
	const response = await api.post('/tasks/room-phases/', {name, id})
	return {status: response.status}
}

export default addPhase;