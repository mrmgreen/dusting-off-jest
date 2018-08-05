import React from 'react';
import { shallow, mount } from 'enzyme';
import Programme from '../../../src/components/Programme';
import { expect } from 'chai';
import AppCon from '../../../src/containers/AppContainer';

const AppContainer = AppCon.__GetDependency__('AppContainer');

describe("<AppContainer />", () => {
  describe("if pathname has a recognised programme name", () => {
    it("AppContainer will render a Programme component", () => {
      const programmeNames = ["gizmo"];
      const component = shallow(<AppContainer programmeNames={programmeNames} pathname="gizmo"/>);
      expect(component.find(Programme).length).to.equal(1);
    });
    // it("the programme name should be the title prop of Programme component", () => {
    // });
    // it("it will pass it's own handleClick prop to Programme component", () => {
    // });
    // it("it will pass it's own quotes prop to Programme component", () => {
    // });
    // it("it will pass it's own randomQuote prop to Programme component", () => {
    // });
  });
  describe("if pathname is NOT a recognised programme name", () => {
    it("AppContainer will not render a Programme component", () => {
      const programmeNames = ["gizmo"];
      const component = shallow(<AppContainer programmeNames={programmeNames} pathname="matilda"/>);
      expect(component.find(Programme).length).to.equal(0);
    });
  });
});