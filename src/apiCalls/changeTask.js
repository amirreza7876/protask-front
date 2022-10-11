import api from "../api";

const changeTask = async (data, id) => {
	await api.patch('/tasks/update/', {id, data})
}

export default changeTask;