import React from "react";
import { shallow } from "enzyme";
import { findByTestAtrr } from "../../../Utils/utils";
import Header from "./header";

const setUp = (props = {}) => {
  const component = shallow(<Header {...props} />);
  return component;
};

describe("Header Component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });
  it("Should render page without errors", () => {
    const wrapper = findByTestAtrr(component, "headerComponent");
    console.log(wrapper.debug());
    expect(wrapper.length).toBe(1);
  });

  it("Should render a logo", () => {
    const logo = findByTestAtrr(component, "logoIMG");
    expect(logo.length).toBe(1);
  });
});
