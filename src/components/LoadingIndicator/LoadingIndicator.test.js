import React from "react";
import { shallow } from "enzyme";

import LoadingIndicator from "./index";

it("renders please wait message", () => {
  const wrapper = shallow(<LoadingIndicator />);
  expect(wrapper.find('.loading-indicator-message').text()).toEqual('Please Wait...');
});

it("renders loading indicator icon as burger", () => {
  const wrapper = shallow(<LoadingIndicator />);
  expect(wrapper.find('.loading-indicator-icon').text()).toEqual('🍔');
});