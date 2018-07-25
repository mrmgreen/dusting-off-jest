import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import aReducer from './reducers';
import AppContainer from './containers/AppContainer';

const initialQuotes = { quotes: [
  "I'd just like to fly a helicopter all around Norfolk. You know, swoop down over a field. Scare a donkey so that it falls into a river. Hover over one of those annoying families that go on holidays on bikes. And shout at them \"get out of the area!\" and watch them panic!",
  "Sunday Bloody Sunday. What a great song. It really encapsulates the frustration of a Sunday, doesn't it?",
  "Jet from Gladiators to host a millennium barn dance at Yeovil aerodrome. Properly policed. It must not, repeat not, turn into an all-night rave.",
  "Wings? They’re only the band The Beatles could've been!"
]};

const store = createStore(aReducer, initialQuotes);

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
);
