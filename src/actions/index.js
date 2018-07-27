export const REQUEST_RANDOM_ALAN_QUOTE = 'REQUEST_RANDOM_ALAN_QUOTE'
function requestRandomAlanQuote() {
  return {
    type: REQUEST_RANDOM_ALAN_QUOTE,
  }
}

export const RECEIVED_RANDOM_ALAN_QUOTE = 'RECEIVED_RANDOM_ALAN_QUOTE'
function receivedRandomAlanQuote(randomAlanQuote) {
  return {
    type: RECEIVED_RANDOM_ALAN_QUOTE,
    randomAlanQuote,
  }
}

export function fetchRandomAlanQuote() {
  return function(dispatch) {
    dispatch(requestRandomAlanQuote())
    return fetch('http://localhost:3000')
    .then(
      response => response.json(),
      error => console.log('An error occurred', error)
    )
    .then(
      json => {
        dispatch(receivedRandomAlanQuote(JSON.parse(json)))
      }
    )
  }
}
