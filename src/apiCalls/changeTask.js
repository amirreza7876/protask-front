import api from "../api";

const changeTask = async (value, field, id) => {
	const response = await api.patch('/tasks/update/', {id, field, value})
	console.log(response)
}

export default changeTask;