import React from "react";
import { shallow } from "enzyme";
import Headline from "./headline";

describe("Headline Component", () => {
  describe("Have props", () => {
    let component;
    beforeEach(() => {
      const props = {
        header: "Test Header",
        desc: "Test Desc",
      };
      component = shallow(<Headline {...props} />);
    });

    it("Should render page without errors", () => {
      const wrapper = component.find(`[data-test='HeadlineComponent']`);
      expect(wrapper.length).toBe(1);
    });

    //TODO write unit test with using sutUp() function like in header and findByTestAtrr() from utils
    it("Should render a H1", () => {});

    //TODO write unit test with using sutUp() function like in header and findByTestAtrr() from utils
    it("Should render a desc", () => {});
  });

  describe("Have NO props", () => {
    //TODO change this unit test with using sutUp() function like in header and findByTestAtrr() from utils
    let component;
    beforeEach(() => {
      component = shallow(<Headline />);
    });

    it("Should not render", () => {
      const wrapper = component.find(`[data-test='HeadlineComponent']`);
      expect(wrapper.length).toBe(0);
    });
  });
});
