import React from 'react';
import { connect } from 'react-redux';
import CarEdit from '../components/cars/CarEdit';
import CarDelete from '../components/cars/CarDelete';
import Dialog, { DialogTitle } from 'material-ui/Dialog';
import Clear from 'material-ui-icons/Clear';
import { cancelEditCar } from '../actions';

class CarDialog extends React.Component {

	constructor(props) {
		super(props);
		this.closeDialog = this.closeDialog.bind(this);
	}

	closeDialog(){
		const { dispatch } = this.props;
		dispatch(cancelEditCar());
	}

	render() {
		const { car, dialogOpen, edit } = this.props;
		return (
			<Dialog open={dialogOpen} >
				<div className="carDialog">
					<div className="dialogHeader">
						<DialogTitle className="dialogTitle">{edit ? 'Edit' : 'Delete'} {car.registrationNumber}</DialogTitle>
						<span className="dialogCloseButton" onClick={this.closeDialog}><Clear /></span>
					</div>
					<div>
						{edit ? <CarEdit /> : <CarDelete />}
					</div>
				</div>
			</Dialog>
		);
	}
}

function mapStateToProps(state) {
	return state.car;
}

export default connect(mapStateToProps)(CarDialog)