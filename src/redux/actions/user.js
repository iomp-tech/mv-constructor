import axios from "axios";

import { API_DOMEN } from '../.././api';

export const fetchUser = () => (dispatch) => {
	dispatch({
		type: 'SET_USER_LOADED',
		payload: false,
	});

	let token = sessionStorage.getItem('success-token');

	axios.get(`${API_DOMEN}/user/me`, {
		headers: {
			Authorization:
				`Bearer ${token}`,
		},
	}).then(({ data }) => {
		if (data.error !== undefined) {
			axios.get(`${API_DOMEN}/refresh`, {
				headers: {
					Authorization:
						`Bearer ${token}`,
				},
			}).then(({ data }) => {
				sessionStorage.setItem('success-token', data.token);

				window.location.reload();
			}).catch(() => {
				sessionStorage.removeItem('success-token');

				dispatch({
					type: 'SET_USER_LOADED',
					payload: true,
				});
			});
		} else {
			dispatch(setUser(data));
		}
	}).catch(() => {
		sessionStorage.removeItem('success-token');

		dispatch({
			type: 'SET_USER_LOADED',
			payload: true,
		});
	});
};

const setUser = (user) => ({
	type: 'SET_USER',
	payload: user,
});