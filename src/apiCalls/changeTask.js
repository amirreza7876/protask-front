import api from "../api";

const changeTask = async (value, field, id) => {
	const response = await api.patch('/tasks/update/', {id, field, value})
}

export default changeTask;