import React from 'react';
import { connect } from 'react-redux';
import FuelEdit from '../components/fuel/FuelEdit';
import CarDelete from '../components/cars/CarDelete';
import Dialog, { DialogTitle } from 'material-ui/Dialog';
import Clear from 'material-ui-icons/Clear';
import { cancelEditFuel } from '../actions';

class FuelDialog extends React.Component {

	constructor(props) {
		super(props);
		this.closeDialog = this.closeDialog.bind(this);
	}

	closeDialog(){
		const { dispatch } = this.props;
		dispatch(cancelEditFuel());
	}

	render() {
		const { dialogAction } = this.props;
		return (
			<Dialog open={dialogAction !== ''} >
				<div className="carDialog">
					<div className="dialogHeader">
						<DialogTitle className="dialogTitle">{dialogAction}</DialogTitle>
						<span className="dialogCloseButton" onClick={this.closeDialog}><Clear /></span>
					</div>
					<div>
						{dialogAction === 'delete' ? <CarDelete /> : <FuelEdit />}
					</div>
				</div>
			</Dialog>
		);
	}
}

function mapStateToProps(state) {
	return state.fuel;
}

export default connect(mapStateToProps)(FuelDialog)