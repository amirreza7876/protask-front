import api from "../api";

const handleUpdateUserData = async (username = null, bio = null, email = null, password = null) => {
	await api.post('/user/my_data/', {username, bio, email, password})
	window.location.reload()
}
export default handleUpdateUserData;