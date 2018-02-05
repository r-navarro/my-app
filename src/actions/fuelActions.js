/*
 * action types
 */
export const GET_FUELS = 'GET_FUELS';
export const ADD_FUEL = 'ADD_FUEL';
export const EDIT_FUEL = 'EDIT_FUEL';
export const CANCEL_EDIT_FUEL = 'CANCEL_EDIT_FUEL';
export const REMOVE_FUEL = 'REMOVE_FUEL';
export const CANCEL_REMOVE_FUEL = 'CANCEL_REMOVE_FUEL';
export const RELOAD_FUELS = 'RELOAD_FUELS';
export const NEXT_FUELS = 'NEXT_FUELS';
export const GET_FUELS_DATA = 'GET_FUELS_DATA';



/*
 * action creators
*/
export const getFuels = (carId, activeStep, steps, fuels) => {return {
	type: GET_FUELS,
	carId: carId,
	activeStep: activeStep,
	steps: steps,
	fuels: fuels,
}};

export const addFuel = (carId) => {return {
	type: ADD_FUEL,
	carId: carId,
}};

export const editFuel = (carId, fuel) => {return {
	type: EDIT_FUEL,
	carId: carId,
	fuel: fuel,
}};

export const cancelEditFuel = () => {return {
	type: CANCEL_EDIT_FUEL,
}};

export const removeFuel = (carId, fuelId) => {return {
	type: REMOVE_FUEL,
	carId: carId,
	fuelId: fuelId,
}};

export const cancelRemoveFuel = () => {return {
	type: CANCEL_REMOVE_FUEL,
}};

export const reloadFuels = (carId) => {return {
	type: RELOAD_FUELS,
	carId: carId,
}};

export const getFuelsData = (carId, data) => {return {
	type: GET_FUELS_DATA,
	carId: carId,
	data: data,
}};