import { GET_RANDOM_ALAN_QUOTE } from '../actions';

export default function(state=1, action) {
  switch(action.type) {
    case "GET_RANDOM_ALAN_QUOTE":
      return {
        ...state,
        randomAlanQuote: 'gerbils',
      }
    default:
      return state
  }
}
