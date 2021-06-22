import React from "react";
import { render, cleanup } from "@testing-library/react";

import Picker from "./Picker";
import { PickerProps } from "./Picker.types";

describe("Test Picker", () => {
  let defaultProps: PickerProps;
  let differentProps: PickerProps;
  beforeEach(() => {
    (defaultProps = {
      data: [],
    }),
      (differentProps = { data: [] });
  });

  afterEach(cleanup);

  const renderDefaultComponent = () =>
    render(<Picker data-testid="container" {...defaultProps} />);

  it("There should be proper rendering with default props", () => {
    const { getByTestId } = renderDefaultComponent();
    const element = getByTestId("container") as HTMLDivElement;
    expect(element).toBeInTheDocument();
  });

  const renderComponentDifferentProps = () =>
    render(<Picker data-testid="container" {...differentProps} />);

  it("There should be proper rendering based on different props", () => {
    const { getByTestId } = renderComponentDifferentProps();
    const element = getByTestId("container") as HTMLDivElement;
    expect(element).toBeInTheDocument();
  });
});
