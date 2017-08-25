import * as FetchTypes from './FetchProvider';
import { messageSend } from '../actions';

export default class FuelRest {

	constructor(carId) {
		this.carId = carId;
	}

	getBaseUrl() {
		return `http://localhost:9090/vehicles/${this.carId}/fullTanks/`;
	}

	getFuels(dispatch) {
		return FetchTypes.fetchGet(this.getBaseUrl()).then(result => {
			if(result.status === 200) {
				return result.json();
			} else if (result.status === 403) {
				dispatch(messageSend('Unauthorized'));
			} else if (result.status === 404) {
				dispatch(messageSend('Not found'));
			}
		});
	}

	addFuel(fuel, dispatch) {
		return FetchTypes.fetchPost(this.getBaseUrl(), fuel).then(result => {
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

	updateCar(fuel, dispatch) {
		return FetchTypes.fetchPut(this.getBaseUrl(), fuel).then(result => {
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

	deleteCar(fuelId, dispatch) {
		return FetchTypes.fetchDelete(this.getBaseUrl() + fuelId).then(result => {
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