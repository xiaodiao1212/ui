import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";

import CSSBaseline from "./CSSBaseline";

describe("Test CSSBaseline", () => {
  beforeEach(() => {});
  afterEach(cleanup);
  const renderComponentDefaultProps = () => render(<CSSBaseline />);

  it("There should be proper rendering with default props", () => {
    // const { getByTestId } = renderComponentDefaultProps();
    // const element = getByTestId("CSSBaseline") as HTMLDivElement;
    // expect(element).toBeInTheDocument();
  });
});
