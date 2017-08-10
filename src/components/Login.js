import React from 'react';
import { connect } from 'react-redux';
import { loginReceiveAction, badLogin } from '../actions';
import loginRest from '../http/LoginRest';
import { Redirect } from 'react-router-dom';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import AccountCircle from 'material-ui-icons/AccountCircle';

class Login extends React.Component {

	constructor(props) {
		super(props);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onSubmit = event => {
		const { dispatch, login } = this.props;
		event.preventDefault();
		loginRest(login).then(res => {
			if(res.status === 200){
				const jwtToken = res.headers.get('Authorization');
				localStorage.setItem('jwt-token', jwtToken);
				dispatch(loginReceiveAction(jwtToken));
			} else {
				dispatch(badLogin());
			}
		});
	}

	handleKeyPress = (event) => {
		if(event.key === 'Enter'){
			this.onSubmit(event);
		}
	}

	render() {
		const { isLogged, badLogin, login } = this.props;
		if (isLogged) {
	      return (
	        <Redirect to={'/'}/>
	      )
	    }

		return (
			<div className="loginForm" onKeyPress={this.handleKeyPress}>
				<div className="loginHeader">
			        <AccountCircle className="loginCircle"/>
			        <div> Login </div>
			    </div>
				<div className="loginFieldsWrapper">
					<span className="loginFields">
						<TextField type="text" name="name" label="Login" fullWidth
							onChange={event => {login.user = event.target.value}}
						/>
					</span>
					<span className="loginFields">
						<TextField type="Password" name="password" label="Password" fullWidth
							onChange={event => {login.password = event.target.value}}
						/>
					</span>

					<span className="badLogin">{badLogin && 'Bad login !'}</span>

					<span className="loginFields">
						<Button raised color="primary" onClick={this.onSubmit}>
							Login
						</Button>
					</span>
				</div>
			</div>
		);
	}

}

function mapStateToProps(state) {
	state = state.loginState;
	return state
}

export default connect(mapStateToProps)(Login)