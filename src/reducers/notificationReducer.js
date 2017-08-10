import * as ActionTypes from '../actions'

const initialState = {
	message:''
};

const notification = (state = initialState, action) => {
	switch (action.type) {
		case ActionTypes.MESSAGE_SEND:
			return Object.assign({}, state, {
				message : action.message
			});
		default:
			return state
	}
}

export default notification