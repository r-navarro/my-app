import React from 'react';
import { connect } from 'react-redux';
import LocalGasStation from 'material-ui-icons/LocalGasStation';
import AddCircleOutline from 'material-ui-icons/AddCircleOutline';
import MobileStepper from 'material-ui/MobileStepper';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import FuelRest from '../../http/FuelRest';
import FuelDialog from '../../containers/FuelDialog';
import { addFuel, getFuels } from '../../actions';
import * as DateUtils from '../../utils/DateUtils';

class Fuel extends React.Component {

  constructor(props) {
    super(props);
    this.handleNext = this.handleNext.bind(this);
    this.handleBack = this.handleBack.bind(this);
    this.addFuel = this.addFuel.bind(this);
    this.getFuels = this.getFuels.bind(this);
  }

  componentWillMount() {
    this.getFuels();
  }

  componentDidUpdate() {
    const { reload } = this.props;
    if(reload){
      this.getFuels();
    }
  }

  getFuels() {
    const { carId, dispatch } = this.props;
    this.fuelRest = new FuelRest(carId);
    this.fuelRest.getFuels(dispatch).then(result => {
      dispatch(getFuels(carId, result.number, result.totalPages, result.content));
    })
  }

  addFuel(){
    const { carId, dispatch } = this.props;
    dispatch(addFuel(carId));
  }

  handleBack() {
    console.log('back')
  }

  handleNext() {
console.log('next')
  }

  render() {
    const { activeStep, steps, fuels } = this.props;
    if(!fuels){
      return(<div>No fuels yet</div>);
    }
    return (
      <div className="fuel">
        <div className="fuelHeader">
          <LocalGasStation />
          <AddCircleOutline onClick={this.addFuel}/>
        </div>
        <div>
          <div className="fuelWrapper">
            <div className="fuelTab">
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Date</TableCell>
                      <TableCell numeric>Cost (€)</TableCell>
                      <TableCell numeric>Quantity</TableCell>
                      <TableCell numeric>Distance</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {fuels.map(fuel => {
                      return(
                        <TableRow key={fuel.id}>
                          <TableCell>
                            {DateUtils.convertDate(new Date(fuel.date))}
                          </TableCell>
                          <TableCell numeric>
                            {fuel.cost}
                          </TableCell>
                          <TableCell numeric>
                            {fuel.quantity}
                          </TableCell>
                          <TableCell numeric>
                            {fuel.distance}
                          </TableCell>
                        </TableRow>
                        );
                    })}
                  </TableBody>
                </Table>
               <MobileStepper
                type="progress"
                steps={steps}
                position="static"
                activeStep={activeStep}
                onBack={this.handleBack}
                onNext={this.handleNext}
                disableBack={activeStep === 0}
                disableNext={activeStep === steps}
              />
            </div>
            <div className="fuelTrend">
              TODO
            </div>
          </div>
        </div>
        <div>
          <FuelDialog />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state.fuel;
}

export default connect(mapStateToProps)(Fuel)
