import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';

import configureStore from './redux/configureStore';


import './style/main.scss';

import history from './history';
import App from './components/app';

const store = configureStore();

function main() {
  ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route path='/' exact component={App}/>
          <Route path='/settings' component={App}/>
          <Route path='/roulette' component={App}/>
        </Switch>
      </Router>
    </Provider>
    // <App/>
    , document.querySelector('.app-wrapper'));
}

document.addEventListener('DOMContentLoaded', main);
