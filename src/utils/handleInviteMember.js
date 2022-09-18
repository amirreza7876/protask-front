import api from "../api";

const handleInviteMember = async (username, requestString) => {
	await api.post('/rooms/join-invites/', {usernameOrEmail: username, requestString})
}

export default handleInviteMember;