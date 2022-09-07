import api from "../api";

const handleInvite = async (event, type, invite) => {
	event.preventDefault()
	const fromRoom = invite.from_room.request_string
	const forUser = invite.for_user
	const inviteId = invite.id
	switch (type) {
		case'accept':
			await api.post('/rooms/invite/', {fromRoom, forUser, inviteId, accepted: true})
			break
		case 'reject':
			await api.post('/rooms/invite/', {fromRoom, forUser, inviteId, accepted: false})
			break
	}
}

export default handleInvite;