export default class HomeRest {
	

	isAlive() {
		const headers = new Headers();
		headers.append('Content-Type', 'application/json');

		const body = JSON.stringify({
			'userName': 'admin',
			'password': 'admin',
		});


		fetch('http://localhost:9090/login', {  
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
		fetch('http://localhost:9090/users', {  
			method: 'get',
			headers: headers,
		}).then(res => {
			return res.json().then(data => {
				return data;
			});
		})
	}
}