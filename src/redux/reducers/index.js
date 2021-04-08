import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

import login from './login';
import user from './user';
import goods from './goods';
import teachers from './teachers';
import timetable from './timetable';

const rootReducer = combineReducers({
	login,
	user,
	goods,
	teachers,
	timetable,
	form: formReducer,
});

export default rootReducer;