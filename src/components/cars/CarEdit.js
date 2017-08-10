import React from 'react';
import { connect } from 'react-redux';
import { addCar, updateCar } from '../../actions';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import CarsRest from '../../http/CarsRest';

class CarEdit extends React.Component {

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit = event => {
    const { car, dispatch } = this.props;
    event.preventDefault();
    const carsRest = new CarsRest();
    if (!car.id) {
      carsRest.addCar(car, dispatch).then(result => {
        if(result) {
          dispatch(addCar(result));
        }
      });
    }else {
      carsRest.updateCar(car, dispatch).then(result => {
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
    const { car } = this.props;

    return (
      <div className="" onKeyPress={this.handleKeyPress}>
        <div className="textFieldWrapper">
          <div className="textField">
            <TextField type="text" name="registrationNumber" label="Registration number" fullWidth
              onChange={event => {car.registrationNumber = event.target.value}}
              defaultValue={car.registrationNumber}
            />
          </div>
          
          <div className="textField">
            <TextField type="text" name="type" label="Type" fullWidth
              onChange={event => {car.type = event.target.value}}
              defaultValue={car.type}
            />
          </div>
          
          <div className="textField">
            <TextField type="number" name="price" label="Price" fullWidth
              onChange={event => {car.price = event.target.value}}
              defaultValue={`${car.price}`}
            />
          </div>

          <div className="textField">
            <TextField type="number" name="kilometers" label="Kilometers" fullWidth
              onChange={event => {car.kilometers = event.target.value}}
              defaultValue={`${car.kilometers}`}
            />
          </div>

          <div className="">
            <Button raised color="primary" onClick={this.onSubmit}>
              {car.id ? 'Update' : 'Add'}
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

export default connect(mapStateToProps)(CarEdit)
