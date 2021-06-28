import React from "react";
import { render, cleanup } from "@testing-library/react";

import Alert from "./Alert";
import { AlertProps } from "./Alert.types";

describe("Test Alert", () => {
  let defaultProps: AlertProps;
  beforeEach(() => {
    defaultProps = {};
  });

  afterEach(cleanup);

  const renderDefaultComponent = () =>
    render(<Alert data-testid="alert" {...defaultProps} />);

  it("There should be proper rendering with default props", () => {
    const { getByTestId } = renderDefaultComponent();
    const element = getByTestId("alert") as HTMLHRElement;
    expect(element).toBeInTheDocument();
    expect(element).toHaveStyle({
      display: "flex",
    });
  });
});
