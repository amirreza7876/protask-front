import api from "../api";

const getUserName = async (setUsername) => {
	const username = await api.get('/user/my_data/').then(res => res.data.username)
	setUsername(username)
}

export default getUserName;