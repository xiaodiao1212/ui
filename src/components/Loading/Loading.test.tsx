import React from "react";
import { render, cleanup } from "@testing-library/react";

import Loading from "./Loading";
import { LoadingProps } from "./Loading.types";

describe("Test Loading", () => {
  let defaultProps: LoadingProps;
  let differentProps: LoadingProps;
  beforeEach(() => {
    (defaultProps = {}), (differentProps = {});
  });

  afterEach(cleanup);

  const renderDefaultComponent = () =>
    render(<Loading data-testid="loading" {...defaultProps} />);

  it("There should be proper rendering with default props", () => {
    // const { getByTestId } = renderDefaultComponent();
    // const element = getByTestId("loading") as HTMLDivElement;
    // expect(element).toBeInTheDocument();
  });

  const renderComponentDifferentProps = () =>
    render(<Loading data-testid="loading" {...differentProps} />);

  it("There should be proper rendering based on different props", () => {
    // const { getByTestId } = renderComponentDifferentProps();
    // const element = getByTestId("loading") as HTMLDivElement;
    // expect(element).toBeInTheDocument();
  });
});
