import React from 'react';
import { shallow, mount } from 'enzyme';
import RandomQuotesButton from '../../../src/components/RandomQuotesButton';

describe("<RandomQuotesButton>", () => {
  it('invoke the click handler when clicked', () => {
    const handleClickStub = jest.fn();
    const component = shallow(<RandomQuotesButton handleClick={handleClickStub} />)
    component.simulate('click');
    expect(handleClickStub).toHaveBeenCalledTimes(1);
  });
});
