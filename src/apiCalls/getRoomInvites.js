import api from "../api";

const getRoomRequests = async (setRoomInvites, requestString, id) => {
	const response = await api.get(`/rooms/room-invites/${id}/${requestString}`).catch(err => err.response)
	setRoomInvites({data: response.data, status: response.status})
}
export default getRoomRequests;