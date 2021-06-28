import React from "react";
import { render, cleanup } from "@testing-library/react";
import Image from "./Image";
import { ImageProps } from "./Image.types";

describe("Test Image", () => {
  let defaultProps: ImageProps;
  beforeEach(() => {
    defaultProps = {
      src: "",
    };
  });

  afterEach(cleanup);

  const renderDefaultComponent = () =>
    render(<Image data-testid="image" {...defaultProps} />);

  it("There should be proper rendering with default props", () => {});
});
