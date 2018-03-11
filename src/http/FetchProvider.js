const baseUrl = 'http://localhost:9090/';

export function fetchGet(url) {
	return fetch(baseUrl + url, {
		method: 'get',
		headers: getHeaders()
	});
}

export function fetchPost(url, body) {
	return fetch(baseUrl + url, {
		method: 'post',
		headers: getHeaders(),
		body: JSON.stringify(body)
	});
}

export function fetchPut(url, body) {
	return fetch(baseUrl + url, {
		method: 'put',
		headers: getHeaders(),
		body: JSON.stringify(body)
	});
}

export function fetchDelete(url) {
	return fetch(baseUrl + url, {
		method: 'delete',
		headers: getHeaders()
	});
}

function getHeaders() {
	const headers = new Headers();
	headers.append('Content-Type', 'application/json');
	if (localStorage.getItem('jwt-token')) {
		headers.append('Authorization', localStorage.getItem('jwt-token'));
	}
	return headers;
}
