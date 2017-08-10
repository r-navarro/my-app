import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutAction } from '../actions';
import { Redirect } from 'react-router-dom';

class Logout extends Component {

	componentDidMount(){
		const { dispatch } = this.props;
		localStorage.removeItem('jwt-token');
		dispatch(logoutAction());
	}

	render() {
		return (
          <Redirect to={'/login'}/>
		);
	}
}

const mapStateToProps = state => {
	return state
}

export default connect(mapStateToProps)(Logout)