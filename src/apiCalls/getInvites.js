import api from "../api";

const getInvites = async (setInvites) => {
	const response =await api.get('/rooms/join-invites/')
	setInvites(response.data)
}
export default getInvites;