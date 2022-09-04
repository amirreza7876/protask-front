import axios from 'axios';

const instance = axios.create({
	baseURL: `http://127.0.0.1:8000/`
});

instance.interceptors.request.use(function (config) {
	// Do something before request is sent
	return config;
}, function (error) {
	// Do something with request error
	return Promise.reject(error);
});

export default instance