import axios from "axios";

const verifyToken = async (token) => {
	const response = await axios.post('http://127.0.0.1:8000/api/token/verify/', {token}).catch(err => err.response)
	return response.status === 200
}
export default verifyToken;