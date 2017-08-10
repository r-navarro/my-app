const loginRest = (loginFromView) => {
	const headers = new Headers();
	headers.append('Content-Type', 'application/json');

	const body = JSON.stringify({
		'userName': loginFromView.user,
		'password': loginFromView.password,
	});


	return fetch('http://localhost:9090/login', {  
		method: 'post',
		headers: {'Content-Type': 'application/json'},
		body: body,
	});
}


export default loginRest