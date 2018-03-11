export default class HomeRest {
	

	isAlive() {
		const headers = new Headers();
		headers.append('Content-Type', 'application/json');

		const body = JSON.stringify({
			'userName': 'admin',
			'password': 'admin',
		});


		fetch('login', {  
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: body,
		}).then(res => {
			return this.callMeMaybe(res.headers.get('Authorization'));
		});
	}

	callMeMaybe(jwtToken) {
		const headers = new Headers();
		headers.append('Authorization', jwtToken);
		headers.append('Content-Type', 'application/json');
		fetch('users', {  
			method: 'get',
			headers: headers,
		}).then(res => {
			return res.json().then(data => {
				return data;
			});
		})
	}
}