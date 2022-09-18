import api from "../api";

const changeBoardName = async (id, name) => {
	const response = await api.patch('/rooms/edit-name/' + id.toString(), {name})
}
export default changeBoardName;