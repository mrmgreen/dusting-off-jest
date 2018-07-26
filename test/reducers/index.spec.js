import reducer from '../../src/reducers';
import { GET_RANDOM_ALAN_QUOTE } from '../../src/actions';
import { expect } from 'chai';

describe('reducers', () => {
  it('should return the initial type', () => {
    expect(reducer(undefined, {})).to.equal(1);
  })

  it('should change the state of randomAlanQuote when action type is GET_RANDOM_ALAN_QUOTE', () => {
    const expectedState = {
      randomAlanQuote: 'gerbils'
    }
    expect(reducer({}, { type: GET_RANDOM_ALAN_QUOTE })).to.deep.equal(expectedState);
  })
})
