import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import BreezoReducer from './reducers';
import { loadState, saveState} from './localStorage'
const persistedState = loadState();
const store = createStore(
  BreezoReducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

require('dotenv').config()

store.subscribe(() => {
  saveState(store.getState())
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
