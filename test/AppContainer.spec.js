import React from 'react';
import { shallow, mount } from 'enzyme';
import AppContainer from '../../src/container/AppContainer';
import Programme from '../../src/component/Programme';
import { expect } from 'chai';

describe("<AppContainer />", () => {
  describe("if pathname has a recognised programme name", () => {
    it("will render a Programme component", () => {
      const programmeNames = ["gizmo"];
      const component = shallow(<AppContainer config={programmeNames} pathname="gizmo"/>);
      expect(component.find(Programme).length).to.equal(1);
    });
    it("the programme name should be the title prop of Programme component", () => {
    });
    it("it will pass it's own handleClick prop to Programme component", () => {
    });
    it("it will pass it's own quotes prop to Programme component", () => {
    });
    it("it will pass it's own randomQuote prop to Programme component", () => {
    });
  });
});