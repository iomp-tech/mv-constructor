const initialState = {
	isLoaded: false,
	isLoadedById: false,
	items: [],
	itemById: [],
};

const timetable = (state = initialState, action) => {
	if (action.type === 'SET_TIMETABLE') {
		return {
			...state,
			items: action.payload,
			isLoaded: true
		};
	}
	if (action.type === 'SET_TIMETABLE_BY_ID') {
		return {
			...state,
			itemById: action.payload,
			isLoadedById: true
		};
	}
	if (action.type === 'SET_LOADED_TIMETABLE') {
		return {
			...state,
			isLoaded: action.payload,
		};
	}
	if (action.type === 'SET_LOADED_BY_ID_TIMETABLE') {
		return {
			...state,
			isLoadedById: action.payload,
		};
	}
	return state;
};

export default timetable;