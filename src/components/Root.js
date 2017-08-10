import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import history from './History'
import App from './App'
import Login from './Login';
import Logout from './Logout';

const Root = ({ store }) => (

  <Provider store={store}>
    <Router history={history}>
    	<div>
			<Route exact path="/" component={App}/>
      <Route path="/login" component={Login}/>
      <Route path="/logout" component={Logout}/>
		</div>
    </Router>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root