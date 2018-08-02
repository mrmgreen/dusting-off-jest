import { quotes as quotesReducer } from '../../src/reducers';
import { RECEIVED_RANDOM_QUOTE } from '../../src/actions';
import { expect } from 'chai';

describe('quotesReducer', () => {
  it('should return the initial type', () => {
    expect(quotesReducer(undefined, {})).to.equal(1);
  });

  it('should return payload of action as randomQuote when type is RECEIVED_RANDOM_QUOTE', () => {
    const quote = 'Scare a donkey';
    const expectedState = {
      randomQuote: quote,
    };
    expect(quotesReducer({}, { type: RECEIVED_RANDOM_QUOTE, randomQuote: quote })).to.deep.equal(expectedState);
  })
});
