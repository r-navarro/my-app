import React, { Component } from 'react';
import { connect } from 'react-redux';
import { messageSend } from '../actions';

class Notification extends Component {

  componentDidUpdate() {
    const { dispatch } = this.props;
    setTimeout(() => {
      dispatch(messageSend(''));
    }, 4000)
  }

  render() {
    const {message} = this.props;
    if(message === '') {
      return (<div/>);
    }

    return (
      <div className="notificationBlock">
        <div className="notification animateOpen">
          {message}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state = {}) {
  return state.notification;
}

export default connect(mapStateToProps)(Notification)