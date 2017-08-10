import { fetchGet, fetchPost, fetchPut, fetchDelete } from './FetchProvider';
import { messageSend } from '../actions';

export default class CarsRest {

	getCars(dispatch) {
		return fetchGet('http://localhost:9090/vehicles').then(result => {
			if(result.status === 200) {
				return result.json();
			} else if (result.status === 403) {
				dispatch(messageSend('Unauthorized'));
			} else if (result.status === 404) {
				dispatch(messageSend('Not found'));
			}
		});
	}

	addCar(car, dispatch) {
		return fetchPost('http://localhost:9090/vehicles', car).then(result => {
			if(result.status === 201) {
				return result.json();
			} else if (result.status === 403) {
				dispatch(messageSend('Unauthorized'));
			} else if (result.status === 400) {
				result.json().then(json => {
					dispatch(messageSend(json.errorMessage));
				});
			}
		});
	}

	updateCar(car, dispatch) {
		return fetchPut('http://localhost:9090/vehicles', car).then(result => {
			if(result.status === 201) {
				return result.json();
			} else if (result.status === 403) {
				dispatch(messageSend('Unauthorized'));
			} else if (result.status === 400) {
				result.json().then(json => {
					dispatch(messageSend(json.errorMessage));
				});
			}
		});
	}

	deleteCar(car, dispatch) {
		return fetchDelete(`http://localhost:9090/vehicles/${car.id}`).then(result => {
			if(result.status === 204) {
				return result.text();
			} else if (result.status === 403) {
				dispatch(messageSend('Unauthorized'));
			} else {
				result.json().then(json => {
					dispatch(messageSend(json.errorMessage));
				});
			}
		});
	}
}