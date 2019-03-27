import React from 'react';
import { shallow, mount } from 'enzyme';
import Programme from '../../../src/components/Programme';
import connectedAppContainer from '../../../src/containers/AppContainer';

const AppContainer = connectedAppContainer.WrappedComponent;

describe("<AppContainer />", () => {
  describe("if pathname has a recognised programme name", () => {
    it("AppContainer will render a Programme component", () => {
      const programmeNames = ["gizmo"];
      const component = shallow(<AppContainer programmeNames={programmeNames} pathname="gizmo"/>);
      expect(component.find(Programme).length).toBe(1);
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
  describe("if pathname is NOT a recognised programme name", () => {
    it("AppContainer will not render a Programme component", () => {
      const programmeNames = ["gizmo"];
      const component = shallow(<AppContainer programmeNames={programmeNames} pathname="matilda"/>);
      expect(component.find(Programme).length).toBe(0);
    });
  });
});