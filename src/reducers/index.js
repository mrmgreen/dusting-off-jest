import { REQUEST_RANDOM_ALAN_QUOTE, RECEIVED_RANDOM_ALAN_QUOTE } from '../actions';

export default function(state=1, action) {
  switch(action.type) {
    case REQUEST_RANDOM_ALAN_QUOTE:
      return {
        ...state,
      }
    case RECEIVED_RANDOM_ALAN_QUOTE:
      return {
        ...state,
        randomAlanQuote: action.randomAlanQuote
      }
    default:
      return state
  }
}
