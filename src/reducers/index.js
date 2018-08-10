import { combineReducers } from 'redux';
import { THUNK_REQUEST_RANDOM_QUOTE, THUNK_RECEIVED_RANDOM_QUOTE } from '../actions';

export const quotes = function(state=1, action) {
  switch(action.type) {
    case THUNK_RECEIVED_RANDOM_QUOTE:
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
  quotes,
  programmeNames,
});

export default rootReducer;