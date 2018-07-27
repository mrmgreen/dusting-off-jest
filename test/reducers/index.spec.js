import reducer from '../../src/reducers';
import { RECEIVED_RANDOM_ALAN_QUOTE } from '../../src/actions';
import { expect } from 'chai';

describe('reducers', () => {
  it('should return the initial type', () => {
    expect(reducer(undefined, {})).to.equal(1);
  })

  it('should return payload of action as randomAlanQuote when type is RECEIVED_RANDOM_ALAN_QUOTE', () => {
    const quote = 'Scare a donkey';
    const expectedState = {
      randomAlanQuote: quote,
    }
    expect(reducer({}, { type: RECEIVED_RANDOM_ALAN_QUOTE, randomAlanQuote: quote })).to.deep.equal(expectedState);
  })
})
