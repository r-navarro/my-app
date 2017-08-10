import React from 'react';
import { connect } from 'react-redux';

class CarTrend extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {
    const { cars, index } = this.props;
    const car = cars[index]

    return (
      <div className="carTrend">
        TODO TREND
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state.car;
}

export default connect(mapStateToProps)(CarTrend)
