import React from "react";
import { shallow } from "enzyme";
import { findByTestAtrr } from "../../../Utils/utils";
import SharedButton from "./button";

describe("SharedButton Component", () => {
  describe("Renders", () => {
    let component;
    let mockFunc;
    beforeEach(() => {
      mockFunc = jest.fn();
      const props = {
        buttonText: "Example Button Text",
        emitEvent: mockFunc,
      };
      component = shallow(<SharedButton {...props} />);
    });

    it("Should Render a button", () => {
      const button = findByTestAtrr(component, "buttonComponent");
      expect(button.length).toBe(1);
    });

    //TODO write unit test with simulate click function and checked mockFunc.mock.calls
    it("Should emit callback on click event", () => {});
  });
});
