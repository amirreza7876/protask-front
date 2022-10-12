import api from "../api";

const getRoomDetail = async (id) => {
	return await api.get(`/rooms/mine/${id}`).catch(err => err.response)
}

export default getRoomDetail;