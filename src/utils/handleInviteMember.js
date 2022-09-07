import api from "../api";

const handleInviteMember = async (event, username, requestString) => {
	event.preventDefault()
	const response = await api.post('/rooms/join-invites/', {usernameOrEmail: username, requestString})
	console.log(response)
}

export default handleInviteMember;