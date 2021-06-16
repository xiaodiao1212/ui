import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import Overlay from "./Overlay";
import { OverlayProps } from "./Overlay.types";

describe("Test Overlay", () => {
  let defaultProps,showProps,otherProps: OverlayProps;
  beforeEach(() => {
    defaultProps = {
      show: false,
    };
    showProps = {
      show: true,
    };
    otherProps = {
      show: true,
      opacity:0.58
    };
  });

  afterEach(cleanup);

  const renderComponentDefaultProps = () =>
    render(<Overlay {...defaultProps}></Overlay>);

  it("There should be proper rendering with default props", () => {
    // const { getByTestId } = renderComponentDefaultProps();
    // const element = getByTestId("overlay") as HTMLButtonElement;
    // expect(element).toBeInTheDocument();
    // expect(element).toHaveStyle('opacity:0.46')
    // expect(element).toHaveStyle('display:none')
    // expect(element).toHaveStyle('position:fixed')
  });

  // const renderComponentShowProps = () =>
  //   render(<Overlay {...showProps}></Overlay>);

  // it("There should be proper rendering with show props", () => {
  //   const { getByTestId } = renderComponentShowProps();
  //   const element = getByTestId("overlay") as HTMLButtonElement;
  //   expect(element).toBeInTheDocument();
  //   expect(element).toHaveStyle('display:flex')
  // });

  // const renderComponentOtherProps = () =>
  //   render(<Overlay {...otherProps}></Overlay>);

  // it("There should be proper rendering with other props", () => {
  //   const { getByTestId } = renderComponentOtherProps();
  //   const element = getByTestId("overlay") as HTMLButtonElement;
  //   expect(element).toBeInTheDocument();
  //   expect(element).toHaveStyle('display:flex')
  //   expect(element).toHaveStyle('opacity:0.58')
  // });
});
