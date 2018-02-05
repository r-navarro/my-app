import React from 'react';
import { connect } from 'react-redux';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';
import FuelRest from '../../http/FuelRest';
import { getFuelsData } from '../../actions/fuelActions';

class FuelGraph extends React.Component {

    constructor(props) {
        super(props);
        this.getFuelsData = this.getFuelsData.bind(this);
        this.fuelRest = new FuelRest(props.carId, props.dispatch);
    }

    componentWillMount() {
        this.getFuelsData();
    }

    componentDidUpdate() {
        const { reload } = this.props;
        if (reload) {
            this.getFuelsData();
        }
    }

    getFuelsData() {
        const { carId, dispatch } = this.props;
        this.fuelRest.getFuelsData().then(result => {
            dispatch(getFuelsData(carId, result));
        })
    }

    render() {
        const { data } = this.props;
        if (!data) {
            return (<div>No data yet</div>);
        }
        return (<div className="fuelTrend">
            <ResponsiveContainer width="100%" height={400}>
                <LineChart data={data}>
                    <Line type="monotone" dataKey="cost" stroke="#8884d8" />
                    <Line type="monotone" dataKey="distance" stroke="#82ca9d" />
                    <XAxis dataKey="date" />
                    <Tooltip />
                    <YAxis />
                </LineChart>
            </ResponsiveContainer>
        </div>)
    }

}

function mapStateToProps(state) {
    return state.fuel;
}

export default connect(mapStateToProps)(FuelGraph)