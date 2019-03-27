import { quotes as quotesReducer, programmeNames as programmeNamesReducer } from '../../../src/reducers/index';
import { THUNK_RECEIVED_RANDOM_QUOTE } from '../../../src/actions/index';

describe('quotesReducer', () => {
  it('should return the initial type', () => {
    expect(quotesReducer(undefined, {})).toEqual(1);
  });

  it('should return payload of action as randomQuote when type is THUNK_RECEIVED_RANDOM_QUOTE', () => {
    const quote = 'Scare a donkey';
    const expectedState = {
      randomQuote: quote,
    };
    expect(quotesReducer({}, { type: THUNK_RECEIVED_RANDOM_QUOTE, randomQuote: quote })).toEqual(expectedState);
  })
});

describe('programmeNamesReducer', () => {
  it('default state should be an empty array', () => {
    expect(programmeNamesReducer(undefined, {})).toEqual([]);
  });
  it('should return an array of strings if state is an array of strings', () => {
    const programmeNames = ['pulp fiction', 'super man'];
    expect(programmeNamesReducer(programmeNames, {})).toEqual(programmeNames);
  });
});
