const initialState = {
	isLoaded: false,
	isLoadedById: false,
	items: [],
	itemById: [],

	pageCopyId: 0,
	pageCopy: []
};

const goods = (state = initialState, action) => {
	if (action.type === 'SET_GOODS') {
		return {
			...state,
			items: action.payload,
			isLoaded: true
		};
	}
	if (action.type === 'SET_GOODS_BY_ID') {
		return {
			...state,
			itemById: action.payload,
			isLoadedById: true
		};
	}
	if (action.type === 'SET_LOADED_GOODS') {
		return {
			...state,
			isLoaded: action.payload,
		};
	}
	if (action.type === 'SET_LOADED_BY_ID_GOODS') {
		return {
			...state,
			isLoadedById: action.payload,
		};
	}

	if (action.type === 'SET_GOODS_PAGE_COPY') {
		return {
			...state,
			pageCopy: action.payload.page,
			pageCopyId: action.payload.id
		};
	}

	return state;
};

export default goods;