import axios from 'axios';

const api = axios.create({
	baseURL: 'http://localhost:3001'
});

api.interceptors.request.use(
	function(config) {
		const token = sessionStorage.getItem('jwt'); 
		if (token) {
			config.headers['Authorization'] = 'Bearer ' + token;
		}
		return config;
	},
	function(error) {
		return Promise.reject(error);
	}
);

export default api;