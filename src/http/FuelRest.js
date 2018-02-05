import * as FetchTypes from './FetchProvider';
import { messageSend } from '../actions';

export default class FuelRest {

	constructor(carId, dispatch) {
		this.carId = carId;
		this.dispatch = dispatch;
	}

	getBaseUrl() {
		return `http://localhost:9090/vehicles/${this.carId}/fullTanks/`;
	}

	getFuels(page=0) {
		return FetchTypes.fetchGet(this.getBaseUrl() + `?page=${page}`).then(result => {
			if(result.status === 200) {
				return result.json();
			} else if (result.status === 403) {
				this.dispatch(messageSend('Unauthorized'));
			} else if (result.status === 404) {
				this.dispatch(messageSend('Not found'));
			}
		});
	}

	addFuel(fuel) {
		return FetchTypes.fetchPost(this.getBaseUrl(), fuel).then(result => {
			if(result.status === 201) {
				return result.json();
			} else if (result.status === 403) {
				this.dispatch(messageSend('Unauthorized'));
			} else if (result.status === 400) {
				result.json().then(json => {
					this.dispatch(messageSend(json.errorMessage));
				});
			}
		});
	}

	updateFuel(fuel) {
		return FetchTypes.fetchPut(this.getBaseUrl() + fuel.id, fuel).then(result => {
			if(result.status === 201) {
				return result.json();
			} else if (result.status === 403) {
				this.dispatch(messageSend('Unauthorized'));
			} else if (result.status === 400) {
				result.json().then(json => {
					this.dispatch(messageSend(json.errorMessage));
				});
			}
		});
	}

	deleteFuel(fuelId) {
		return FetchTypes.fetchDelete(this.getBaseUrl() + fuelId).then(result => {
			if(result.status === 204) {
				return result.text();
			} else if (result.status === 403) {
				this.dispatch(messageSend('Unauthorized'));
			} else {
				result.json().then(json => {
					this.dispatch(messageSend(json.errorMessage));
				});
			}
		});
	}

	getFuelsData() {
		return FetchTypes.fetchGet(this.getBaseUrl() + `data`).then(result => {
			if(result.status === 200) {
				return result.json();
			} else if (result.status === 403) {
				this.dispatch(messageSend('Unauthorized'));
			} else if (result.status === 404) {
				this.dispatch(messageSend('Not found'));
			}
		});
	}
}