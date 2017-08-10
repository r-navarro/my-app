import { combineReducers } from 'redux'
import loginState from './login'
import notification from './notificationReducer'
import car from './carReducer'
import fuel from './fuelReducer'

const myApp = combineReducers({
  loginState,
  notification,
  car,
  fuel
})

export default myApp
