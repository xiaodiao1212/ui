import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import Timeline from "./Timeline";
import { TimelineProps } from "./Timeline.types";

describe("Test Timeline", () => {
  let defaultProps: TimelineProps;
  beforeEach(() => {
    defaultProps = {
      data: [],
    };
  });

  afterEach(cleanup);
  const renderComponentDefaultProps = () =>
    render(<Timeline {...defaultProps}></Timeline>);

  it("There should be proper rendering with default props", () => {
    const { getByTestId } = renderComponentDefaultProps();
    // const element = getByTestId("timeline") as HTMLButtonElement;
  });
});
