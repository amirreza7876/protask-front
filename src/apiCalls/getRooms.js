import api from "../api";

const getRooms = async (setRooms) => {
	const response = await api.get('/rooms/mine/')
	setRooms(response.data)
}

export default getRooms;