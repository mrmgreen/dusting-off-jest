import { combineReducers } from 'redux';
import { REQUEST_RANDOM_QUOTE, RECEIVED_RANDOM_QUOTE } from '../actions';

export const quotes = function(state=1, action) {
  switch(action.type) {
    case RECEIVED_RANDOM_QUOTE:
      return {
        ...state,
        randomQuote: action.randomQuote
      };
    default:
      return state
  }
};

export const programmeNames = function(state = [], action) {
  return state
};

const rootReducer = combineReducers({
  quotes
});

export default rootReducer;