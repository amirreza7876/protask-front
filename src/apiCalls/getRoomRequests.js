import api from "../api";

const getRoomRequests = async (setRoomRequests, requestString, id) => {
	const response = await api.get(`/rooms/room-requests/${id}/${requestString}`).catch(err => err.response)
	setRoomRequests({data: response.data, status: response.status})
}
export default getRoomRequests;