const initialState = {
	isLoaded: false,
	items: [],
};

const teachers = (state = initialState, action) => {
	if (action.type === 'SET_TEACHERS') {
		return {
			...state,
			items: action.payload,
			isLoaded: true
		};
	}
	return state;
};

export default teachers;