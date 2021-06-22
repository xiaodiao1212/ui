import React from "react";
import { render, cleanup } from "@testing-library/react";

import Card from "./Card";
import { CardProps } from "./Card.types";

describe("Test Card", () => {
  let defaultProps: CardProps;
  let differentProps: CardProps;
  beforeEach(() => {
    (defaultProps = {}), (differentProps = {});
  });

  afterEach(cleanup);

  const renderDefaultComponent = () =>
    render(<Card data-testid="card" {...defaultProps} />);

  it("There should be proper rendering with default props", () => {
    const { getByTestId } = renderDefaultComponent();
    const element = getByTestId("card") as HTMLDivElement;
    expect(element).toBeInTheDocument();
  });

  const renderComponentDifferentProps = () =>
    render(<Card data-testid="card" {...differentProps} />);

  it("There should be proper rendering based on different props", () => {
    const { getByTestId } = renderComponentDifferentProps();
    const element = getByTestId("card") as HTMLDivElement;
    expect(element).toBeInTheDocument();
  });
});
