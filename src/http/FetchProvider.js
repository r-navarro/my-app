export function fetchGet(url){
	return fetch(url, {  
		method: 'get',
		headers: getHeaders()
	});
}

export function fetchPost(url, body) {
	return fetch(url, {  
		method: 'post',
		headers: getHeaders(),
		body: JSON.stringify(body)
	});
}

export function fetchPut(url, body) {
	return fetch(url, {  
		method: 'put',
		headers: getHeaders(),
		body: JSON.stringify(body)
	});
}

export function fetchDelete(url) {
	return fetch(url, {  
		method: 'delete',
		headers: getHeaders()
	});
}

function getHeaders() {
	const headers = new Headers();
	headers.append('Content-Type', 'application/json');
	headers.append('Authorization', localStorage.getItem('jwt-token'));
	return headers;
}
