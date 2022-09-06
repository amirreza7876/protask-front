import api from "../api";

const getRoomDetail = async (setRoomDetail, id) => {
	console.log(id)
	const response = await api.get(`/rooms/mine/${id}`).catch(err => err.response)
	setRoomDetail({data: response.data, status: response.status})
}

export default getRoomDetail;