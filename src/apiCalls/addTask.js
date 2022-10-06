import api from "../api";

const addTask = async (title, duration, user, difficulty, priority, id, selectedPhase) => {
	// console.log(selectedPhase)
	const response = await api.post('/tasks/create/', {title, duration, user, difficulty, priority, id, selectedPhase})
	return {status: response.status}
}

export default addTask;