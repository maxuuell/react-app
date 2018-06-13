import { combineReducers } from 'redux';

const toggleRender = (state = {}, action) => {
	if (typeof action === 'undefined') {
		return state;
	} else if (action === 'SHOW') {
		return Object.assign({}, state, {
			showHeader: !state.showHeader,
		});
	}
	return state;
};

const changeColor = (state = {}, action) => {
	if (typeof action === 'undefined') {
		return state;
	} else if (action === 'CHANGE_COLOR') {
		return Object.assign({}, state, {
			headerColor: `${action.color}`,
		});
	}
	return state;
};

const app = combineReducers({
	showHeader: toggleRender,
	headerColor: changeColor,
});

export default app;
