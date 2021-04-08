import axios from "axios";

import { API_DOMEN } from '../.././api';

export const sendLogin = (formData) => (dispatch) => {
	dispatch({
		type: 'SET_LOADED_LOGIN',
		payload: true,
	});

	axios
		.post(`${API_DOMEN}/login/admin`, formData)
		.then(({ data }) => {
			sessionStorage.setItem('success-token', data.token);

			dispatch({
				type: 'SET_LOADED_LOGIN',
				payload: false,
			});

			window.location.href = "/goods";
		})
		.catch((error) => {
			dispatch(setMessageLogin("Неверный email или пароль"));

			dispatch({
				type: 'SET_LOADED_LOGIN',
				payload: false,
			});
		});
};

const setMessageLogin = (message) => ({
	type: 'SET_MESSAGE_LOGIN',
	payload: message,
});