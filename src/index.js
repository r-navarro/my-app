import registerServiceWorker from './registerServiceWorker';
import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import myApp from './reducers'
import Root from './components/Root'
import thunk from 'redux-thunk';

let store = createStore(myApp,
	applyMiddleware(thunk));

render(
  <Root store={store} />,
  document.getElementById('root')
)

registerServiceWorker();
