import axios from 'axios';
import verifyToken from "./utils/verifyToken";

const redirectToLogin = () => {
	localStorage.removeItem('token')
	window.location.replace('login')
}

const instance = axios.create({
	baseURL: `http://127.0.0.1:8000/`,
});

instance.interceptors.request.use(async function (config) {
	// Do something before request is sent
	const token = localStorage.getItem('token')
	if (token) {
		config.headers.Authorization = `Bearer ${token}`;
		const response = await verifyToken(token)  // returns true is token is valid'
		if (!response) {
			redirectToLogin()
		}
	}
	return config;

}, function (error) {
	// Do something with request error
	return Promise.reject(error);
});

export default instance