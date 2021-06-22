import React from "react";
import { render, cleanup } from "@testing-library/react";

import Progress from "./Progress";
import { ProgressProps } from "./Progress.types";

describe("Test Progress", () => {
  let defaultProps: ProgressProps;
  let differentProps: ProgressProps;
  beforeEach(() => {
    (defaultProps = {}), (differentProps = {});
  });

  afterEach(cleanup);

  const renderDefaultComponent = () =>
    render(<Progress data-testid="progress" {...defaultProps} />);

  it("There should be proper rendering with default props", () => {});
});
