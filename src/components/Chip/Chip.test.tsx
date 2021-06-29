import React from "react";
import { render, cleanup } from "@testing-library/react";

import Chip from "./Chip";
import { ChipProps } from "./Chip.types";

describe("Test Chip", () => {
  let defaultProps: ChipProps;
  beforeEach(() => {
    defaultProps = {};
  });

  afterEach(cleanup);

  const renderDefaultComponent = () =>
    render(<Chip data-testid="chip" {...defaultProps} />);

  it("There should be proper rendering with default props", () => {
    const { getByTestId } = renderDefaultComponent();
    const element = getByTestId("chip") as HTMLHRElement;
    expect(element).toBeInTheDocument();
    expect(element).toHaveStyle({
      color: "#333",
    });
  });
});
