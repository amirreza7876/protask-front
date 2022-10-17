import api from "../api";

const handleInvite = async (event, type, invite) => {
	event.preventDefault()
	const uuid = invite.from_room.id
	const forUser = invite.for_user
	const inviteId = invite.id
	switch (type) {
		case'accept':
			await api.post('/rooms/invite/', {uuid, forUser, inviteId, accepted: true})
			break
		case 'reject':
			await api.post('/rooms/invite/', {uuid, forUser, inviteId, accepted: false})
			break
	}
}

export default handleInvite;