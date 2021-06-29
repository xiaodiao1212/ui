import React from "react";
import { render, cleanup } from "@testing-library/react";

import Snackbar from "./Snackbar";
import { SnackbarProps } from "./Snackbar.types";

describe("Test Snackbar", () => {
  let defaultProps: SnackbarProps;
  beforeEach(() => {
    defaultProps = {};
  });

  afterEach(cleanup);

  const renderDefaultComponent = () =>
    render(<Snackbar data-testid="snackbar" {...defaultProps} />);

  it("There should be proper rendering with default props", () => {
    const { getByTestId } = renderDefaultComponent();
    const element = getByTestId("snackbar") as HTMLHRElement;
    expect(element).toBeInTheDocument();
    expect(element).toHaveStyle({
      color: "#333",
    });
  });
});
