import React from 'react';
import { connect } from 'react-redux';
import { editCar, deleteCar } from '../../actions';
import Edit from 'material-ui-icons/Edit';
import Remove from 'material-ui-icons/Remove';

class Car extends React.Component {

  constructor(props) {
    super(props);
    this.edit = this.edit.bind(this);
    this.delete = this.delete.bind(this);
  }

  edit() {
    const { cars, index, dispatch } = this.props;
    dispatch(editCar(cars[index]));
  }

  delete() {
    const { cars, index, dispatch } = this.props;
    dispatch(deleteCar(cars[index]));
  }

  render() {
    const { cars, index } = this.props;
    const car = cars[index]

    return (
      <div className="carWrapper">
        <div className="carFieldWrapper">
          <span className="carMainField">
            {car.registrationNumber}
          </span>
          <div className="carFieldsAndButtons">
            <div className="carSubFieldWrapper">

              <div className="carField">
                <span className="carLabel">
                  Type:
                </span>
                <span className="carValue">
                  {car.type}
                </span>
              </div>

              <div className="carField">
                <span className="carLabel">
                  Price:
                </span>
                <span className="carValue">
                  {car.price}
                </span>
              </div>

              <div className="carField">
                <span className="carLabel">
                  Kilometers:
                </span>
                <span className="carValue">
                  {car.kilometers}
                </span>
              </div>

            </div>

            <div className="carButtons">
              <div className="mainButton" onClick={this.edit}>
                <Edit />
              </div>
              <div className="mainButton" onClick={this.delete}>
                <Remove />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state.car;
}

export default connect(mapStateToProps)(Car)
