import * as ActionTypes from '../actions'

const initialState = {
	activeStep: 0,
	maxStep: 6
};

const fuel = (state = initialState, action) => {
	switch (action.type) {
		case ActionTypes.GET_FUEL:
			return Object.assign({}, state, {
				cars : action.cars
			});
		default:
			return state
	}
}

export default fuel;