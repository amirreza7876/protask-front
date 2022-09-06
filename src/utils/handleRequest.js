import api from "../api";

const handleRequest = async (event, type, request) => {
	const fromUser = request.from_user
	const forRoom = request.for_room
	const requestId = request.id
	switch (type) {
		case 'accept':
			const responseAccepted = await api.post('/rooms/request/', {fromUser, forRoom, requestId, accepted: true})
			console.log(responseAccepted)
			break
		case 'reject':
			const responseRejected = await api.post('/rooms/request/', {fromUser, forRoom, requestId, accepted: false})
			console.log(responseRejected)
			break

	}

}

export default handleRequest;