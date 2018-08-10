export const THUNK_REQUEST_RANDOM_QUOTE = 'THUNK_REQUEST_RANDOM_QUOTE';
function thunkRequestRandomQuote() {
  return {
    type: THUNK_REQUEST_RANDOM_QUOTE,
  }
}

export const THUNK_RECEIVED_RANDOM_QUOTE = 'THUNK_RECEIVED_RANDOM_QUOTE';
function thunkReceivedRandomQuote(randomQuote) {
  return {
    type: THUNK_RECEIVED_RANDOM_QUOTE,
    randomQuote: randomQuote,
  }
}

export function thunkFetchRandomQuote() {
  return function(dispatch) {
    dispatch(thunkRequestRandomQuote());
    return fetch('http://localhost:3000/alan-quote')
    .then(
      response => response.json(),
      error => console.log('An error in thunkFetchRandomQuote occurred: ', error)
    )
    .then(
      json => {
        dispatch(thunkReceivedRandomQuote(JSON.parse(json)))
      }
    )
  }
}

export const NEW_REQUEST_RANDOM_QUOTE = 'NEW_REQUEST_RANDOM_QUOTE';
export function newRequestRandomQuote() {
  return {
    type: NEW_REQUEST_RANDOM_QUOTE
  }
}