import api from "../api";

const getRequests = async (setRequests) => {
	const response = await api.get('/rooms/join-requests/')
	setRequests(response.data)
}

export default getRequests;
