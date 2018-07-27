import { fetchRandomAlanQuote } from '../../src/actions';
import { expect } from 'chai';

describe('fetchRandomAlanQuote', () => {
  it('should return a function', () => {
    expect(fetchRandomAlanQuote()).to.be.a('function');
  })
})
