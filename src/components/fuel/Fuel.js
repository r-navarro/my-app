import React from 'react';
import { connect } from 'react-redux';
import LocalGasStation from 'material-ui-icons/LocalGasStation';
import MobileStepper from 'material-ui/MobileStepper';

class Fuel extends React.Component {

  constructor(props) {
    super(props);
    this.handleNext = this.handleNext.bind(this);
    this.handleBack = this.handleBack.bind(this);
  }


  handleBack() {
    console.log('back')
  }

  handleNext() {
console.log('next')
  }

  render() {
    const { activeStep } = this.props;
    return (
      <div className="fuel">
        <div className="fuelHeader">
          <LocalGasStation />
        </div>
        <div>
          <div className="fuelWrapper">
            <div className="fuelTab">
              TODO
               <MobileStepper
                type="progress"
                steps={6}
                position="static"
                activeStep={activeStep}
                onBack={this.handleBack}
                onNext={this.handleNext}
                disableBack={activeStep === 0}
                disableNext={activeStep === 5}
              />
            </div>
            <div className="fuelTrend">
              TODO
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state.fuel)
  return state.fuel;
}

export default connect(mapStateToProps)(Fuel)
