import axios from "axios";

import { API_DOMEN } from '../.././api';

export const fetchTeachers = () => (dispatch) => {
	axios.get(`${API_DOMEN}/teachers?main=true`).then(({ data }) => {
		dispatch(setTeachers(data));
	});
};

const setTeachers = (items) => ({
	type: 'SET_TEACHERS',
	payload: items,
});
