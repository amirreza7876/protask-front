import api from "../api";

const addTask = async (title, duration, user, difficulty, priority, id) => {
	const response = await api.post('/tasks/create/', {title, duration, user, difficulty, priority, id})
	return {status: response.status}
}

export default addTask;