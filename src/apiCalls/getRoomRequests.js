import api from "../api";

const getRoomRequests = async (setRoomRequests, id) => {
	const response = await api.get(`/rooms/room-requests/${id}/`).catch(err => err.response)
	console.log(response)
	setRoomRequests({data: response.data, status: response.status})
}
export default getRoomRequests;