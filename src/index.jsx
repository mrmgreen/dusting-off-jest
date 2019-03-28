import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import {  Router, Route } from "react-router-dom";

import AppContainer from './containers/AppContainer';
import setupStore from './setupStore';

ReactDOM.render(
  <Provider store={setupStore()}>
    <Router history={createBrowserHistory()}>
      <Route path="/" component={AppContainer} />
      <Route path="/alan" component={AppContainer} />
      <Route path="/pulp" component={AppContainer} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
