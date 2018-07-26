import React from 'react';
import { shallow, mount } from 'enzyme';
import RandomQuotesButton from '../../src/components/RandomQuotesButton';
import { expect } from 'chai';
import sinon from 'sinon';

describe("<RandomQuotesButton>", () => {
  it('invoke the click handler when clicked', () => {
    const handleClickStub = sinon.stub();
    const component = shallow(<RandomQuotesButton handleClick={handleClickStub} />)
    component.simulate('click');
    expect(handleClickStub.callCount).to.equal(1);
  });
});
