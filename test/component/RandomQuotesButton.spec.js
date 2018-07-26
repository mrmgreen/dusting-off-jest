import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../../src/components/RandomQuotesButton';
import { expect } from 'chai';
import sinon from 'sinon';

describe("<RandomQuotesButton>", () => {
  it('invoke the click handler when clicked', () => {
    const clickHandlerStub = sinon.stub();
    const component = shallow(<RandomQuotesButton clickHandler={clickHandlerStub} />)
    component.simulate('click');
    expect(clickHandlerStub.callCount).to.equal(2);
  });
});
