import axios from "axios";

import { API_DOMEN } from '../.././api';

export const fetchGoods = (title = null) => (dispatch) => {
	dispatch({
		type: 'SET_LOADED_GOODS',
		payload: false,
	});

	axios.get(`${API_DOMEN}/goods${title !== null ? `?title=${title}` : ``}`).then(({ data }) => {
		dispatch(setGoods(data));
	});
};

export const fetchGoodsById = (id) => (dispatch) => {
	dispatch({
		type: 'SET_LOADED_BY_ID_GOODS',
		payload: false,
	});

	axios.get(`${API_DOMEN}/goods/${id}`).then(({ data }) => {
		dispatch(setGoodsById(data));
	});
};

const setGoods = (items) => ({
	type: 'SET_GOODS',
	payload: items,
});

const setGoodsById = (item) => ({
	type: 'SET_GOODS_BY_ID',
	payload: item,
});

export const setGoodsPageCopy = (item) => ({
	type: 'SET_GOODS_PAGE_COPY',
	payload: item,
});