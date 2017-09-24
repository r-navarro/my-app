import * as ActionTypes from '../actions/fuelActions'

const initialState = {
	activeStep: 0,
	steps: 0,
	dialogAction: '',
	reload: false,
};

const fuel = (state = initialState, action) => {
	switch (action.type) {
		case ActionTypes.RELOAD_FUELS:
			return Object.assign({}, state, {
				carId : action.carId,
				dialogAction: '',
				reload: true,
			});
		case ActionTypes.GET_FUELS:
			return Object.assign({}, state, {
				carId : action.carId,
				dialogAction: '',
				activeStep: action.activeStep,
				steps: action.steps,
				fuels: action.fuels,
				fuel: {},
				reload: false,
			});
		case ActionTypes.NEXT_FUELS:
			return Object.assign({}, state, {
				carId : action.carId,
				dialogAction: '',
				activeStep: action.activeStep,
				steps: action.steps,
				fuels: action.fuels,
				fuel: {},
				reload: false,
			});
		case ActionTypes.ADD_FUEL:
			return Object.assign({}, state, {
				carId : action.carId,
				fuel: {
					date: new Date(),
				},
				dialogAction: 'create',
			});
		case ActionTypes.EDIT_FUEL:
			return Object.assign({}, state, {
				carId : action.carId,
				fuel: action.fuel,
				dialogAction: 'edit',
			});
		case ActionTypes.CANCEL_EDIT_FUEL:
			return Object.assign({}, state, {
				fuel: {},
				dialogAction: '',
			});
		case ActionTypes.REMOVE_FUEL:
			return Object.assign({}, state, {
				carId : action.carId,
				fuelId: action.fuelId,
				dialogAction: 'delete',
			});
		case ActionTypes.CANCEL_REMOVE_FUEL:
			return Object.assign({}, state, {
				fuel: {},
				dialogAction: '',
			});
		default:
			return state
	}
}

export default fuel;