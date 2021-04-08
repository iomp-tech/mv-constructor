const initialState = {
	isLoaded: false,
	isLogin: false,
};

const user = (state = initialState, action) => {
	if (action.type === 'SET_USER') {
		return {
			...state,
			isLoaded: true,
			isLogin: true,
		};
	}
	if (action.type === 'SET_USER_LOADED') {
		return {
			...state,
			isLoaded: action.payload
		};
	}
	return state;
};

export default user;