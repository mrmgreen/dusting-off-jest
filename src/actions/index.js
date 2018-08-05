export const REQUEST_RANDOM_QUOTE = 'REQUEST_RANDOM_QUOTE';
function requestRandomQuote() {
  return {
    type: REQUEST_RANDOM_QUOTE,
  }
}

export const RECEIVED_RANDOM_QUOTE = 'RECEIVED_RANDOM_QUOTE';
function receivedRandomQuote(randomQuote) {
  return {
    type: RECEIVED_RANDOM_QUOTE,
    randomQuote: randomQuote,
  }
}

function fetchRandomAlanQuote() {
  return function(dispatch) {
    dispatch(requestRandomQuote())
    return fetch('http://localhost:3000/alan-quote')
    .then(
      response => response.json(),
      error => console.log('An error in fetchRandomAlanQuote occurred: ', error)
    )
    .then(
      json => {
        dispatch(receivedRandomQuote(JSON.parse(json)))
      }
    )
  }
}

export function fetchRandomQuote(programme) {

}