import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './redux/store'

import App from './App';

import './all.scss';

ReactDOM.render(
  <BrowserRouter>
    <Provider  store={store}>
      <App/>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);


