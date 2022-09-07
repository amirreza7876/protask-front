import api from "../api";

const handleRequest = async (event, type, request) => {
	const fromUser = request.from_user
	const forRoom = request.for_room
	const requestId = request.id
	switch (type) {
		case 'accept':
			await api.post('/rooms/request/', {fromUser, forRoom, requestId, accepted: true})
			break
		case 'reject':
			await api.post('/rooms/request/', {fromUser, forRoom, requestId, accepted: false})
			break

	}

}

export default handleRequest;