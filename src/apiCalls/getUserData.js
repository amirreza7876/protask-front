import api from "../api";

const getUserData = async (setUsername, setEmail, setBio) => {
	const userData = await api.get('/user/my_data/').then(res => res.data)
	if (setUsername) {
		setUsername(userData.username)
	}
	if (setEmail) {
		setEmail(userData.email)
	}
	if(setBio){
		setBio(userData.bio)
	}
}

export default getUserData;