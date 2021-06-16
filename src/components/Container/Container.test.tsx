import React from "react";
import { render, cleanup } from "@testing-library/react";

import Container from "./Container";
import { ContainerProps } from "./Container.types";

describe("Test Container", () => {
  let defaultProps: ContainerProps;
  let differentProps: ContainerProps;
  beforeEach(() => {
    (defaultProps = {}),
      (differentProps = {
        noPadding: true,
      });
  });

  afterEach(cleanup);

  const renderDefaultComponent = () =>
    render(<Container data-testid="container" {...defaultProps} />);

  it("There should be proper rendering with default props", () => {
    const { getByTestId } = renderDefaultComponent();
    const element = getByTestId("container") as HTMLDivElement;
    expect(element).toBeInTheDocument();
  });

  const renderComponentDifferentProps = () =>
    render(<Container data-testid="container" {...differentProps} />);

  it("There should be proper rendering based on different props", () => {
    const { getByTestId } = renderComponentDifferentProps();
    const element = getByTestId("container") as HTMLDivElement;
    expect(element).toBeInTheDocument();
  });
});
