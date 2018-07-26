import { GET_RANDOM_ALAN_QUOTE, getRandomAlanQuote } from '../../src/actions';
import { expect } from 'chai';

describe('getRandomAlanQuote', () => {
  it('should create an action to get a random Alan quote', () => {
    const expectedAction = {
      type: GET_RANDOM_ALAN_QUOTE,
    }
    expect(getRandomAlanQuote()).to.deep.equal(expectedAction);
  })
})
