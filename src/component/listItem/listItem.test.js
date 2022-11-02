import React from "react";
import { shallow } from "enzyme";
import { findByTestAtrr } from "../../../Utils/utils";
import ListItem from "./listItem";

describe("ListItem Component", () => {
  describe("Component Renders", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        title: "Example Title",
        desc: "Some text",
      };
      wrapper = shallow(<ListItem {...props} />);
    });

    //TODO write unit test with using sutUp() function like in header and findByTestAtrr() from utils
    it("Should renders without error", () => {});

    //TODO write unit test with using sutUp() function like in header and findByTestAtrr() from utils
    it("Should render a title", () => {});

    //TODO write unit test with using sutUp() function like in header and findByTestAtrr() from utils
    it("Should render a desc", () => {});
  });

  describe("Should NOT render", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        desc: "Some text",
      };
      wrapper = shallow(<ListItem {...props} />);
    });

    //TODO write unit test with using findByTestAtrr() from utils
    it("Component is not rendered", () => {});
  });
});
