import React from "react";
import { render, cleanup } from "@testing-library/react";

import Input from "./Input";

describe("Test Input", () => {
  let defaultProps;
  beforeEach(() => {
    defaultProps = {};
  });

  afterEach(cleanup);

  const renderDefaultComponent = () =>
    render(<Input data-testid="input" {...defaultProps} />);

  it("There should be proper rendering with default props", () => {
    const { getByTestId } = renderDefaultComponent();
    const element = getByTestId("input") as HTMLHRElement;
    expect(element).toBeInTheDocument();
    expect(element).toHaveStyle({
      display: "flex",
    });
  });
});
