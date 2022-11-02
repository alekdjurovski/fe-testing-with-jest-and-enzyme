import App from "./App";
import { shallow } from "enzyme";
import { findByTestAtrr, testStore } from "../Utils/utils";
import React from "react";

const setUp = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<App store={store} />)
    .childAt(0)
    .dive();
  return wrapper;
};

describe("App Component", () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {
      posts: [
        {
          title: "Example title 1",
          body: "Some text",
        },
        {
          title: "Example title 2",
          body: "Some text",
        },
        {
          title: "Example title 3",
          body: "Some text",
        },
      ],
    };
    wrapper = setUp(initialState);
  });

  it("Should render App Component without errors", () => {
    const component = findByTestAtrr(wrapper, "appComponent");
    expect(component.length).toBe(1);
  });

  it("exampleMethod_returnsAValue Method should return value as expected", () => {
    const appComponentInstance = wrapper.instance();
    const newValue = appComponentInstance.exampleMethod_returnsAValue(6);
    expect(newValue).toBe(7);
  });

  //TODO write unit test for exampleMethod_updatesState() function
  it("exampleMethod_updatesState Method should update state as expected", () => {});
});
