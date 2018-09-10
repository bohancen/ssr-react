import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { createStore,applyMiddleware, compose} from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import registerServiceWorker from './registerServiceWorker';
import reducers from './redux'

const reduxDevtools = window.devToolsExtension ? window.devToolsExtension() : f=>f
const store = createStore(reducers,compose(
    applyMiddleware(thunk),
    reduxDevtools
))

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
