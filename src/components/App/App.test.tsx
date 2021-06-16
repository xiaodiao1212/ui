import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";

import App from "./App";
import { AppProps } from "./App.types";

describe("Test App", () => {
  let defaultProps: AppProps;
  beforeEach(() => {
    defaultProps = {};
  });
  afterEach(cleanup);
  const renderComponentDefaultProps = () =>
    render(<App {...defaultProps}/>);

  it("There should be proper rendering with default props", () => {
    const { getByTestId } = renderComponentDefaultProps();
    const element = getByTestId("app") as HTMLDivElement;
    expect(element).toBeInTheDocument();
  });
});
