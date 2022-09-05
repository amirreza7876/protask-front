import api from "../api";

const searchForRoom = async (e, roomString) => {
	e.preventDefault()
	const response = await api.post('/rooms/join-requests/', {request_string: roomString})
}

export default searchForRoom;