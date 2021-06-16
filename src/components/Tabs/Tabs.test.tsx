import React from "react";
import {
  render,
  cleanup,
  fireEvent,
  RenderResult,
} from "@testing-library/react";
import Tab from "./Tab";
import Tabs from "./Tabs";
import { TabsProps } from "./Tabs.types";
import { TabProps } from "./Tab.types";

let defaultProps: TabsProps;
const testProps: TabsProps = {
  defaultIndex: 0,
  onSelect: jest.fn(),
};
const verticalProps: TabsProps = {
  defaultIndex: 0,
  mode:'vertical',
  onSelect: jest.fn(),
}; 

let wrapper: RenderResult,
  tabsElement: HTMLElement,
  activeElement: HTMLElement,
  disabledElement: HTMLElement;

const generateTabs = (props: TabsProps) => (
  <Tabs {...props} >
    <Tab>active</Tab>
    <Tab disabled>
      disabled
    </Tab>
    <Tab>other</Tab>
  </Tabs>
);
describe("Test Tabs and Tab component", () => {
  beforeEach(() => {
    wrapper = render(generateTabs(testProps));
    tabsElement = wrapper.getByTestId("test-tabs");
    activeElement = wrapper.getByText("active");
    disabledElement = wrapper.getByText("disabled");
  });

  it("There should be proper rendering with default props", () => {
    expect(tabsElement).toBeInTheDocument()
    expect(tabsElement).toHaveClass('tabs')
    expect(tabsElement.getElementsByTagName('li').length).toEqual(3)
    expect(activeElement).toHaveClass('tab tab-active')
    expect(disabledElement).toHaveClass('tab tab-disabled')
  });
  it("There should be change active and call the right callback when click tab", () => {
    const otherElement = wrapper.getByText('other')
    fireEvent.click(otherElement)
    expect(otherElement).toHaveClass('tab tab-active')
    expect(activeElement).not.toHaveClass('tab-active')
    expect(testProps.onSelect).toBeCalledWith(2)
    fireEvent.click(disabledElement)
    expect(disabledElement).not.toHaveClass('tab-active')
    expect(testProps.onSelect).not.toHaveBeenCalledWith(1)
  });

  it("There should be render vertical tabs when 'mode' set to 'vertical'",()=>{
    cleanup()
    wrapper = render(generateTabs(verticalProps));
    tabsElement = wrapper.getByTestId("test-tabs");
    expect(tabsElement).toHaveClass('tabs tabs-vertical')
  })
});
