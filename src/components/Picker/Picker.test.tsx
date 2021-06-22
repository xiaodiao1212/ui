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
    render(<Picker data-testid="picker" {...defaultProps} />);

  it("There should be proper rendering with default props", () => {});
});
