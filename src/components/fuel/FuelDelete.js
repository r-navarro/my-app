import React from 'react';
import { connect } from 'react-redux';
import Button from 'material-ui/Button';
import FuelRest from '../../http/FuelRest';
import { cancelRemoveFuel, reloadFuels } from '../../actions/fuelActions';

class FuelDelete extends React.Component {

	constructor(props) {
		super(props);
		this.handleConfirm = this.handleConfirm.bind(this);
		this.handleCancel = this.handleCancel.bind(this);
		this.fuelRest = new FuelRest(props.carId, props.dispatch);
	}

	handleConfirm() {
		const { fuelId, carId, dispatch } = this.props;
		this.fuelRest.deleteFuel(fuelId).then(() => dispatch(reloadFuels(carId)));
	}

	handleCancel() {
		const { dispatch } = this.props;
		dispatch(cancelRemoveFuel());
	}

	render() {
		return (
			<div>
				<div>Delete the fuel ?</div>
				<div className="twoButtonWrapper">
					<div className="twoButtonFirst">
						<Button raised color="primary" onClick={this.handleConfirm}>
							Yes
						</Button>
					</div>
					<div className="twoButtonSecond" onClick={this.handleCancel}>
						<Button raised color="primary">
							No
						</Button>
					</div>
				</div>
			</div>
			);
	}
}

function mapStateToProps(state) {
	return state.fuel;
}

export default connect(mapStateToProps)(FuelDelete)