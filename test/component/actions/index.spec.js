import { expect } from 'chai';
import sinon from 'sinon';
import { __RewireAPI__ as actionsModule } from '../../../src/actions/index';
import { fetchRandomQuote, REQUEST_RANDOM_QUOTE, RECEIVED_RANDOM_QUOTE } from '../../../src/actions/index';

describe.only('fetchRandomQuote', () => {
  it('should return a function', () => {
    expect(fetchRandomQuote()).to.be.a('function');
  });

  it('should dispatch requestRandomAlanQuote and receivedRandomAlanQuote', () => {
    const jsonValue = JSON.stringify("hello");
    const jsonStub = sinon.stub().returns(jsonValue);
    const response = { json: jsonStub };
    const fetchStub = sinon.stub().resolves(response);
    global.fetch = fetchStub;
    const dispatchStub = sinon.stub();
    const thunk = fetchRandomQuote();
    const action = thunk(dispatchStub);

    const requestRandomAlanQuoteAction = { type: REQUEST_RANDOM_QUOTE };
    const receivedRandomAlanQuoteAction =
    {
      type: RECEIVED_RANDOM_QUOTE,
      randomQuote: JSON.parse(jsonValue),
    };

    expect(dispatchStub.calledWith(requestRandomAlanQuoteAction)).to.equal(true);

    action.then(() => {
      expect(dispatchStub.calledTwice).to.equal(true);
      expect(dispatchStub.calledWith(receivedRandomAlanQuoteAction)).to.equal(true);
    }).catch(er => expect(er).to.equal(false))
  });
});

describe('fetchRandomQuote', () => {
  it('should return a function', () => {
    expect(fetchRandomQuote).to.be.a('function');
  });
  it('should call')
});
