import axios from "axios";

import { API_DOMEN } from '../.././api';

export const fetchTimetable = (title = null) => (dispatch) => {
	dispatch({
		type: 'SET_LOADED_TIMETABLE',
		payload: false,
	});

	axios.get(`${API_DOMEN}/timetable${title !== null ? `?title=${title}` : ``}`).then(({ data }) => {
		dispatch(setTimetable(data));
	});
};

export const fetchTimetableById = (id) => (dispatch) => {
	dispatch({
		type: 'SET_LOADED_BY_ID_TIMETABLE',
		payload: false,
	});

	axios.get(`${API_DOMEN}/timetable/${id}`).then(({ data }) => {
		dispatch(setTimetableById(data));
	});
};

const setTimetable = (items) => ({
	type: 'SET_TIMETABLE',
	payload: items,
});

const setTimetableById = (item) => ({
	type: 'SET_TIMETABLE_BY_ID',
	payload: item,
});

export const setTimetablePageCopy = (item) => ({
	type: 'SET_TIMETABLE_PAGE_COPY',
	payload: item,
});