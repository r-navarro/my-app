import React from 'react';
import { connect } from 'react-redux';
import { reloadFuels, updateCar } from '../../actions';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import FuelRest from '../../http/FuelRest';
import * as DateUtils from '../../utils/DateUtils';

class FuelEdit extends React.Component {

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.fuelRest = new FuelRest(props.carId);
  }

  componentWillUpdate() {
    const { carId } = this.props;
    this.fuelRest = new FuelRest(carId);
  }

  onSubmit = event => {
    const { carId, fuel, dispatch } = this.props;
    event.preventDefault();
    if (!fuel.id) {
      this.fuelRest.addFuel(fuel, dispatch).then(result => {
        if(result) {
          dispatch(reloadFuels(carId));
        }
      });
    }else {
      this.fuelRest.updateFuel(fuel, dispatch).then(result => {
        if(result) {
          dispatch(updateCar(result));
        }
      });
    }
  }

  handleKeyPress = (event) => {
    if(event.key === 'Enter'){
      this.onSubmit(event);
    }
  }

  render() {
    const { fuel } = this.props;

    return (
      <div className="" onKeyPress={this.handleKeyPress}>
        <div className="textFieldWrapper">
          <div className="textField">
            <TextField type="date" name="date" label="Date" fullWidth
              onChange={event => {fuel.date = event.target.value}}
              defaultValue={DateUtils.convertDate(new Date(fuel.date))}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
          
          <div className="textField">
            <TextField type="number" name="cost" label="Cost €" fullWidth
              onChange={event => {fuel.cost = event.target.value}}
              defaultValue={`${fuel.cost}`}
            />
          </div>
          
          <div className="textField">
            <TextField type="number" name="quantity" label="Quantity L" fullWidth
              onChange={event => {fuel.quantity = event.target.value}}
              defaultValue={`${fuel.quantity}`}
            />
          </div>

          <div className="textField">
            <TextField type="number" name="distance" label="Distance KM" fullWidth
              onChange={event => {fuel.distance = event.target.value}}
              defaultValue={`${fuel.distance}`}
            />
          </div>

          <div className="">
            <Button raised color="primary" onClick={this.onSubmit}>
              {fuel.id ? 'Update' : 'Add'}
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

export default connect(mapStateToProps)(FuelEdit)
