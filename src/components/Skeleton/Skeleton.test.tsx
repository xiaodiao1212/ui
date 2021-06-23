import React from "react";
import { render, cleanup } from "@testing-library/react";

import Skeleton from "./Skeleton";
import { SkeletonProps } from "./Skeleton.types";

describe("Test Skeleton", () => {
  let defaultProps: SkeletonProps;
  let differentProps: SkeletonProps;
  beforeEach(() => {
    (defaultProps = {}), (differentProps = {});
  });

  afterEach(cleanup);

  const renderDefaultComponent = () =>
    render(<Skeleton data-testid="skeleton" {...defaultProps} />);

  it("There should be proper rendering with default props", () => {
    const { getByTestId } = renderDefaultComponent();
    const element = getByTestId("skeleton") as HTMLDivElement;
    expect(element).toBeInTheDocument();
  });

  const renderComponentDifferentProps = () =>
    render(<Skeleton data-testid="skeleton" {...differentProps} />);

  it("There should be proper rendering based on different props", () => {
    const { getByTestId } = renderComponentDifferentProps();
    const element = getByTestId("skeleton") as HTMLDivElement;
    expect(element).toBeInTheDocument();
  });
});
