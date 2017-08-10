import * as ActionTypes from '../actions'

const initialState = {
	index:0,
	cars:[],
	car:{},
	dialogOpen: false,
	edit: true
};

const car = (state = initialState, action) => {
	switch (action.type) {
		case ActionTypes.GET_CARS:
			return Object.assign({}, state, {
				cars : action.cars
			});
		case ActionTypes.ADD_CAR:
			state.cars.push(action.car);
			return Object.assign({}, state, {
				car : {},
				index : state.cars.length -1
			});
		case ActionTypes.UPDATE_CAR:
			return Object.assign({}, state, {
				car : {},
				dialogOpen: false
			});
		case ActionTypes.DELETE_CAR:
			return Object.assign({}, state, {
				car : action.car,
				edit: false,
				dialogOpen: true
			});
		case ActionTypes.CHANGE_CAR:
			return Object.assign({}, state, {
				index : action.index
			});
		case ActionTypes.EDIT_CAR:
			return Object.assign({}, state, {
				car : action.car,
				dialogOpen: true,
				edit: true
			});
		case ActionTypes.CANCEL_EDIT_CAR:
			return Object.assign({}, state, {
				car : {},
				dialogOpen: false
			});
		case ActionTypes.AFTER_DELETE_CAR:
			state.cars.splice(state.cars.indexOf(action.car), 1);
			return Object.assign({}, state, {
				car : {},
				dialogOpen: false,
				edit: true,
				index: 0
			});
		case ActionTypes.CANCEL_DELETE_CAR:
			return Object.assign({}, state, {
				car : {},
				dialogOpen: false,
				edit: true,
			});
		default:
			return state
	}
}

export default car;