import api from "../api";

const searchForRoom = async (e, requestString) => {
	e.preventDefault()
	return await api.post('/rooms/join-requests/', {request_string: requestString})
}

export default searchForRoom;