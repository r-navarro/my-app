import * as ActionTypes from '../actions'

const initialState = {
	isLogged : localStorage.getItem('jwt-token') ? true : false,
	login: {
		user: '',
		password:''
	}
};

const loginState = (state = initialState, action) => {
	switch (action.type) {
		case ActionTypes.LOGOUT:
			return Object.assign({}, state, {
				isLogged : false
			});
		case ActionTypes.LOGIN_RECEIVE:
			return Object.assign({}, state, {
				isLogged : true,
				token : action.json
			});
		case ActionTypes.BAD_LOGIN:
			return Object.assign({}, state, {
				isLogged : false,
				badLogin : true
			});
		default:
			return state
	}
}

export default loginState