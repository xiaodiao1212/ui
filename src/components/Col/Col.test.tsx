import React from "react";
import { render, cleanup } from "@testing-library/react";

import Col from "./Col";
import { ColProps } from "./Col.types";

describe("Test Col", () => {
  let defaultProps: ColProps;
  let differentProps: ColProps;
  beforeEach(() => {
    (defaultProps = {}), (differentProps = {});
  });

  afterEach(cleanup);

  const renderDefaultComponent = () =>
    render(<Col data-testid="col" {...defaultProps} />);

  it("There should be proper rendering with default props", () => {
    const { getByTestId } = renderDefaultComponent();
    const element = getByTestId("col") as HTMLDivElement;
    expect(element).toBeInTheDocument();
  });

  const renderComponentDifferentProps = () =>
    render(<Col data-testid="col" {...differentProps} />);

  it("There should be proper rendering based on different props", () => {
    const { getByTestId } = renderComponentDifferentProps();
    const element = getByTestId("col") as HTMLDivElement;
    expect(element).toBeInTheDocument();
  });
});
