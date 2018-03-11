import * as FetchTypes from './FetchProvider';

const loginRest = (loginFromView) => {

	const body = {
		'userName': loginFromView.user,
		'password': loginFromView.password,
	};


	return FetchTypes.fetchPost('login', body);
}


export default loginRest