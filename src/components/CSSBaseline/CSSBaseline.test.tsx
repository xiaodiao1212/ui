import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";

import CSSBaseline from "./CSSBaseline";
import { CSSBaselineProps } from "./CSSBaseline.types";

describe("Test CSSBaseline", () => {
  let defaultProps: CSSBaselineProps;
  beforeEach(() => {
    defaultProps = {};
  });
  afterEach(cleanup);
  const renderComponentDefaultProps = () =>
    render(<CSSBaseline {...defaultProps}/>);

  it("There should be proper rendering with default props", () => {
    const { getByTestId } = renderComponentDefaultProps();
    const element = getByTestId("CSSBaseline") as HTMLDivElement;
    expect(element).toBeInTheDocument();
  });
});
