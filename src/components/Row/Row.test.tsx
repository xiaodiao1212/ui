import React from "react";
import { render, cleanup } from "@testing-library/react";

import Row from "./Row";
import { RowProps } from "./Row.types";

describe("Test Row", () => {
  let defaultProps: RowProps;
  beforeEach(() => {
    
  });

  afterEach(cleanup);

  const renderDefaultComponent = () =>
    render(<Row data-testid="row" {...defaultProps} />);
  
    it("nothing to occur", () => {});
});
