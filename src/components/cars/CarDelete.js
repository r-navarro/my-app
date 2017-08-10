import React from 'react';
import { connect } from 'react-redux';
import Button from 'material-ui/Button';
import CarsRest from '../../http/CarsRest';
import { afterDeleteCar, cancelDeleteCar } from '../../actions';

class CarDelete extends React.Component {

	constructor(props) {
		super(props);
		this.handleConfirm = this.handleConfirm.bind(this);
		this.handleCancel = this.handleCancel.bind(this);
	}

	handleConfirm() {
		const { car, dispatch } = this.props;
		const carRest = new CarsRest();
		carRest.deleteCar(car, dispatch).then(() => {dispatch(afterDeleteCar(car))});
	}

	handleCancel() {
		const { dispatch } = this.props;
		dispatch(cancelDeleteCar());
	}

	render() {
		return (
			<div>
				<div>Delete the car ?</div>
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
	return state.car;
}

export default connect(mapStateToProps)(CarDelete)