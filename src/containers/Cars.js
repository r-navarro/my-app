import React, { Component } from 'react';
import { connect } from 'react-redux';
import CarsRest from '../http/CarsRest';
import AppBar from 'material-ui/AppBar';
import AddCircleOutline from 'material-ui-icons/AddCircleOutline';
import Tabs, { Tab } from 'material-ui/Tabs';
import CarEdit from '../components/cars/CarEdit';
import Car from '../components/cars/Car'
import CarTrend from '../components/cars/CarTrend'
import Fuel from '../components/fuel/Fuel'
import { changeCar, getCars, getFuel } from '../actions';
import CarDialog from './CarDialog';

const TabContainer = props =>
  <div style={{ padding: 24 }}>
    {props.children}
  </div>;

class Cars extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.getCars = this.getCars.bind(this);
    this.getFuel = this.getFuel.bind(this);
  }

  componentWillMount() {
   this.getCars();
   this.getFuel();
  }

  getCars() {
    const { dispatch } = this.props;
    const carsRest = new CarsRest();
    carsRest.getCars(dispatch).then(result => {
      dispatch(getCars(result.content));
    });
  }

  getFuel() {
    const { dispatch } = this.props;
    dispatch(getFuel());
  }

  handleChange = (event, index) => {
    const { dispatch } = this.props;
    dispatch(changeCar(index));
  };

  render() {
    let { index, cars } = this.props;
    const tabs = [];
    for(let i = 0; i<cars.length; i+=1){
      const car = cars[i];
      tabs.push(<Tab key={car.id} label={car.registrationNumber} className="minHeight72"/>)
    }
    return (
      <div className="carsTab">
        <AppBar position="static" color="default">
          <Tabs
            index={index}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            scrollable
            scrollButtons="auto"
            centered
          >
            {tabs}
            <Tab label="Add car" icon={<AddCircleOutline />}/>
          </Tabs>
        </AppBar>
        {index === cars.length &&
          <TabContainer>
            <CarEdit />
          </TabContainer>}
        {index < cars.length &&
          <TabContainer>
            <div className="dashBoardWrapper">
              <div className="carInfoWrapper">
                <Car />
                <CarTrend />
              </div>
              <div className="fuelInfoWrapper">
                <Fuel />
              </div>
            </div>
          </TabContainer>}
        <div>
          <CarDialog />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state = {}) {
  return state.car;
}

export default connect(mapStateToProps)(Cars)