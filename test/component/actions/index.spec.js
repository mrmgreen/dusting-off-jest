import { thunkFetchRandomQuote, THUNK_REQUEST_RANDOM_QUOTE, THUNK_RECEIVED_RANDOM_QUOTE } from '../../../src/actions/index';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk'

const mockStore = configureStore([thunk]);

describe('thunkFetchRandomQuote', () => {
  it('should return a function', () => {
    expect(typeof thunkFetchRandomQuote()).toEqual('function');
  });

  it('should dispatch requestRandomAlanQuote and receivedRandomAlanQuote', () => {
    const jsonValue = JSON.stringify("hello");
    const jsonStub = jest.fn(() => jsonValue);
    const response = { json: jsonStub };
    const fetchMock = jest.fn().mockResolvedValue(response);
    global.fetch = fetchMock;

    const requestRandomAlanQuoteAction = { type: THUNK_REQUEST_RANDOM_QUOTE };
    const receivedRandomAlanQuoteAction = { type: THUNK_RECEIVED_RANDOM_QUOTE, randomQuote: JSON.parse(jsonValue) };
    const expectedActions = [requestRandomAlanQuoteAction, receivedRandomAlanQuoteAction];

    const store = mockStore();
    return store.dispatch(thunkFetchRandomQuote())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      });
  });
});