import api from "../api";

const getRoomRequests = async (setRoomInvites, id) => {
	const response = await api.get(`/rooms/room-invites/${id}/`).catch(err => err.response)
	setRoomInvites({data: response.data, status: response.status})
}
export default getRoomRequests;