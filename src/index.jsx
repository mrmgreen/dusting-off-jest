import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware, ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers';
import AppContainer from './containers/AppContainer';
import programmeNames from "./config/programmeNames";
import { watchNewRandomRequestQuote } from './sagas';

const history = createBrowserHistory();
const initialState = { 
  programmeNames,
  quotes: {
    listOfQuotes: [
      "I'd just like to fly a helicopter all around Norfolk. You know, swoop down over a field. Scare a donkey so that it falls into a river. Hover over one of those annoying families that go on holidays on bikes. And shout at them \"get out of the area!\" and watch them panic!",
      "Sunday Bloody Sunday. What a great song. It really encapsulates the frustration of a Sunday, doesn't it?",
      "Jet from Gladiators to host a millennium barn dance at Yeovil aerodrome. Properly policed. It must not, repeat not, turn into an all-night rave.",
      "Wings? They’re only the band The Beatles could've been!",
      ],
  }
};

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  connectRouter(history)(rootReducer),
  initialState,
  compose(
    applyMiddleware(
        routerMiddleware(history), thunkMiddleware, sagaMiddleware, logger
    ),
  ),
);

sagaMiddleware.run(watchNewRandomRequestQuote);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route component={AppContainer} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
