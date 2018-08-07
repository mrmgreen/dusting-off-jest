import { delay } from 'redux-saga'
import { put, takeEvery } from 'redux-saga/effects'

function* helloSaga() {
  yield delay(2000);
  yield put({type: 'HELLO'});
  console.log('Hello Sagas!')
}

export function* watchNewRandomRequestQuote() {
  yield takeEvery('NEW_REQUEST_RANDOM_QUOTE', helloSaga)
}