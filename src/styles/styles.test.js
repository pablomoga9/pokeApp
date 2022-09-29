import React from "react";
import { shallow } from "enzyme";
import Styles from "./styles";

describe("Styles", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Styles />);
    expect(wrapper).toMatchSnapshot();
  });
});
