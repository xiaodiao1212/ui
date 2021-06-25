import React from "react";
import { render, cleanup, screen } from "@testing-library/react";

import Skeleton from "./Skeleton";
import { SkeletonProps } from "./Skeleton.types";

describe("Test Skeleton", () => {
  let defaultProps: SkeletonProps;
  let differentProps: SkeletonProps;
  beforeEach(() => {
    (defaultProps = {}), (differentProps = {});
  });

  afterEach(cleanup);

  it("There should be proper rendering with default props", () => {
    render(<Skeleton {...defaultProps} />);
    const element = screen.getByTestId("skeleton") as HTMLDivElement;
    expect(element).toBeInTheDocument();
  });

  it("There should be proper rendering based on different props", () => {
    render(<Skeleton {...differentProps} />);
    const element = screen.getByTestId("skeleton") as HTMLDivElement;
    expect(element).toBeInTheDocument();
  });
});
