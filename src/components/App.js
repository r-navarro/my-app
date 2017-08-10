import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../logo.svg';
import '../App.css';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import Cars from '../containers/Cars';
import Notification from './Notification';

class App extends Component {

  render() {
    const { isLogged } = this.props;
    if (!isLogged) {
        return (
          <Redirect to={'/login'}/>
        )
    }

    return (
      <div className="App">
        <Notification />
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

        <Link to="/logout">Logout</Link>

        <Cars />
      </div>  
    );
  }
}

function mapStateToProps(state) {
  return state.loginState;
}

export default connect(mapStateToProps)(App)
