/*
 * action types
 */
export const LOGOUT = 'LOGOUT';
export const LOGIN_RECEIVE = 'LOGIN_RECEIVE';
export const BAD_LOGIN = 'BAD_LOGIN';
export const MESSAGE_SEND = 'MESSAGE_SEND';
export const GET_CARS = 'GET_CARS';
export const ADD_CAR = 'ADD_CAR';
export const UPDATE_CAR = 'UPDATE_CAR';
export const DELETE_CAR = 'DELETE_CAR';
export const CHANGE_CAR = 'CHANGE_CAR';
export const EDIT_CAR = 'EDIT_CAR';
export const CANCEL_EDIT_CAR = 'CANCEL_EDIT_CAR';
export const AFTER_DELETE_CAR = 'AFTER_DELETE_CAR';
export const CANCEL_DELETE_CAR = 'CANCEL_DELETE_CAR';
export const RELOAD_CAR = 'RELOAD_CAR';



/*
 * action creators
*/
export const logoutAction = () => {return {
	type:LOGOUT
}};

export const loginReceiveAction = (json) => {return {
	type:LOGIN_RECEIVE,
	json,
}};

export const badLogin = () => {return {
	type:BAD_LOGIN
}};

export const messageSend = (message) => {return {
	type:MESSAGE_SEND,
	message: message
}};

export const getCars = (cars) => {return {
	type:GET_CARS,
	cars: cars
}};

export const addCar = (car) => {return {
	type:ADD_CAR,
	car: car
}};

export const updateCar = () => {return {
	type:UPDATE_CAR,
}};

export const deleteCar = (car) => {return {
	type:DELETE_CAR,
	car: car
}};

export const changeCar = (index) => {return {
	type:CHANGE_CAR,
	index: index
}};

export const editCar = (car) => {return {
	type:EDIT_CAR,
	car: car
}};

export const cancelEditCar = () => {return {
	type:CANCEL_EDIT_CAR,
}};

export const afterDeleteCar = (car) => {return {
	type:AFTER_DELETE_CAR,
	car: car,
}};

export const cancelDeleteCar = () => {return {
	type:CANCEL_DELETE_CAR,
}};

export const reloadCar = () => {return {
	type:RELOAD_CAR,
}};