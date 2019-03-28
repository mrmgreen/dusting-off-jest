import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers';
import { watchNewRandomRequestQuote } from './sagas';
import programmeNames from "./config/programmeNames";

export default function setupStore() {
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
    rootReducer,
    initialState,
    compose(applyMiddleware(thunkMiddleware, sagaMiddleware, logger)),
  );
  
  sagaMiddleware.run(watchNewRandomRequestQuote);
  
  return store;
}
