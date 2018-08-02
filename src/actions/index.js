export const REQUEST_RANDOM_QUOTE = 'REQUEST_RANDOM_QUOTE'
function requestRandomAlanQuote() {
  return {
    type: REQUEST_RANDOM_QUOTE,
  }
}

export const RECEIVED_RANDOM_QUOTE = 'RECEIVED_RANDOM_QUOTE'
function receivedRandomAlanQuote(randomAlanQuote) {
  return {
    type: RECEIVED_RANDOM_QUOTE,
    randomAlanQuote: randomQuote,
  }
}

export function fetchRandomAlanQuote() {
  return function(dispatch) {
    dispatch(requestRandomAlanQuote())
    return fetch('http://localhost:3000/alan-quote')
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
