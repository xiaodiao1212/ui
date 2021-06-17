import React from "react";
import { render, cleanup } from "@testing-library/react";

import Divider from "./Divider";
import { DividerProps } from "./Divider.types";

describe("Test Divider", () => {
  let defaultProps: DividerProps;
  let verticalProps: DividerProps;
  beforeEach(() => {
    (defaultProps = {}),
      (verticalProps = {
        vertical: true,
      });
  });

  afterEach(cleanup);

  const renderDefaultComponent = () =>
    render(<Divider data-testid="divider" {...defaultProps} />);

  it("There should be proper rendering with default props", () => {
    const { getByTestId } = renderDefaultComponent();
    const element = getByTestId("divider") as HTMLHRElement;
    expect(element).toBeInTheDocument();
    expect(element).toHaveStyle({
      "border-top": "1px solid",
    });
  });

  const renderComponentVerticalProps = () =>
    render(<Divider data-testid="divider" {...verticalProps} />);

  it("There should be proper rendering based on vertical props", () => {
    const { getByTestId } = renderComponentVerticalProps();
    const element = getByTestId("divider") as HTMLHRElement;
    expect(element).toBeInTheDocument();
    expect(element).toHaveStyle({
      "border-left": "1px solid",
    });
  });
});
