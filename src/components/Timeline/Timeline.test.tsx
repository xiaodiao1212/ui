import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import Timeline from "./TimeLine";
import { TimelineProps } from "./Timeline.types";

describe("Test Timeline", () => {
  let defaultProps,showProps,otherProps: TimelineProps;
  beforeEach(() => {
    defaultProps = {
      show: false,    };
    showProps = {

    };
    otherProps = {


    };
  });

  afterEach(cleanup);
const renderComponentDefaultProps = () =>
    render(<Timeline {...defaultProps}></Timeline>);

  it("There should be proper rendering with default props", () => {
    const { getByTestId } = renderComponentDefaultProps();
    // const element = getByTestId("timeline") as HTMLButtonElement;
  
  });
  // const renderComponentDefaultProps = () =>
  //   render(<Timeline {...defaultProps}></Timeline>);

  // it("There should be proper rendering with default props", () => {
  //   const { getByTestId } = renderComponentDefaultProps();
  //   const element = getByTestId("timeline") as HTMLButtonElement;
  //   expect(element).toBeInTheDocument();
  //   expect(element).toHaveStyle('opacity:0.46')
  //   expect(element).toHaveStyle('display:none')
  //   expect(element).toHaveStyle('position:fixed')
  // });

  // const renderComponentShowProps = () =>
  //   render(<Timeline {...showProps}></Timeline>);

  // it("There should be proper rendering with show props", () => {
  //   const { getByTestId } = renderComponentShowProps();
  //   const element = getByTestId("timeline") as HTMLButtonElement;
  //   expect(element).toBeInTheDocument();
  //   expect(element).toHaveStyle('display:flex')
  // });

  // const renderComponentOtherProps = () =>
  //   render(<Timeline {...otherProps}></Timeline>);

  // it("There should be proper rendering with other props", () => {
  //   const { getByTestId } = renderComponentOtherProps();
  //   const element = getByTestId("timeline") as HTMLButtonElement;
  //   expect(element).toBeInTheDocument();
  //   expect(element).toHaveStyle('display:flex')
  //   expect(element).toHaveStyle('opacity:0.58')
  // });
});
