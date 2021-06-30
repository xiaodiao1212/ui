import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";

import App from "./App";

describe("Test App", () => {
  let defaultProps: any;
  beforeEach(() => {
    defaultProps = {};
  });
  afterEach(cleanup);
  const renderComponentDefaultProps = () => render(<App {...defaultProps} />);

  it("There should be proper rendering with default props", () => {
    const { getByTestId } = renderComponentDefaultProps();
    const element = getByTestId("app") as HTMLDivElement;
    expect(element).toBeInTheDocument();
  });
});
