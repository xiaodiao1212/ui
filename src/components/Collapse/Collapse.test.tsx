import React from "react";
import { render, cleanup } from "@testing-library/react";
import Collapse from "./Collapse";
import { CollapseProps } from "./Collapse.types";

describe("Test Collapse", () => {
  let defaultProps: CollapseProps;
  beforeEach(() => {
    defaultProps = {};
  });

  afterEach(cleanup);

  const renderDefaultComponent = () =>
    render(<Collapse data-testid="collapse" {...defaultProps} />);

  it("There should be proper rendering with default props", () => {});
});
