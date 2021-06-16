import React from "react";
import { render, cleanup } from "@testing-library/react";

import Row from "./Row";
import { RowProps } from "./Row.types";

describe("Test Row", () => {
  let defaultProps: RowProps;
  beforeEach(() => {
    
  });

  afterEach(cleanup);

  const renderComponentDefaultProps = () =>
    render(<Row data-testid="row" {...defaultProps} />);
  
    it("There should be proper rendering with default props", () => {
      const { getByTestId } = renderComponentDefaultProps();
      const element = getByTestId("row") as HTMLDivElement;
      expect(element).toBeInTheDocument();
    });
});
