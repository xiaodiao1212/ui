import React from "react";
import { render, cleanup } from "@testing-library/react";

import Progress from "./Progress";
import { ProgressProps } from "./Progress.types";

describe("Test Progress", () => {
  let defaultProps: ProgressProps;
  let differentProps: ProgressProps;
  beforeEach(() => {
    (defaultProps = {}),
      (differentProps = {
        noPadding: true,
      });
  });

  afterEach(cleanup);

  const renderDefaultComponent = () =>
    render(<Progress data-testid="container" {...defaultProps} />);

  it("There should be proper rendering with default props", () => {
    const { getByTestId } = renderDefaultComponent();
    const element = getByTestId("container") as HTMLDivElement;
    expect(element).toBeInTheDocument();
  });

  const renderComponentDifferentProps = () =>
    render(<Progress data-testid="container" {...differentProps} />);

  it("There should be proper rendering based on different props", () => {
    const { getByTestId } = renderComponentDifferentProps();
    const element = getByTestId("container") as HTMLDivElement;
    expect(element).toBeInTheDocument();
  });
});
