import React from "react";
import { render, cleanup } from "@testing-library/react";

import Navigation from "./Navigation";
import { NavigationProps } from "./Navigation.types";

describe("Test Navigation", () => {
  let defaultProps: NavigationProps;
  let differentProps: NavigationProps;
  beforeEach(() => {
    (defaultProps = {}),
      (differentProps = {
        noPadding: true,
      });
  });

  afterEach(cleanup);

  const renderDefaultComponent = () =>
    render(<Navigation data-testid="container" {...defaultProps} />);

  it("There should be proper rendering with default props", () => {
    const { getByTestId } = renderDefaultComponent();
    const element = getByTestId("container") as HTMLDivElement;
    expect(element).toBeInTheDocument();
  });

  const renderComponentDifferentProps = () =>
    render(<Navigation data-testid="container" {...differentProps} />);

  it("There should be proper rendering based on different props", () => {
    const { getByTestId } = renderComponentDifferentProps();
    const element = getByTestId("container") as HTMLDivElement;
    expect(element).toBeInTheDocument();
  });
});
