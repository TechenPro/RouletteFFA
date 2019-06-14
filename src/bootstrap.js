import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import configureStore from './redux/configureStore';

// App Components //
// Styles
import './style/main.scss';
// Data
import history from './history';
// Components
import App from './components/app';
import Gamepage from './components/gamepage/gamepage';

const store = configureStore();

function main() {
  ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
          <Switch>
            <Route path='/' exact component={Gamepage}/>
            <Route path='/settings' component={App}/>
            <Route path='/roulette' component={App}/>
          </Switch>
      </Router>
    </Provider>
    , document.querySelector('.app-wrapper'));
}

document.addEventListener('DOMContentLoaded', main);
