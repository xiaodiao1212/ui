import React from "react";
import { render, cleanup } from "@testing-library/react";

import Modal from "./Modal";
import { ModalProps } from "./Modal.types";

describe("Test Modal", () => {
  let defaultProps: ModalProps;
  let differentProps: ModalProps;
  beforeEach(() => {
    (defaultProps = {}), (differentProps = {});
  });

  afterEach(cleanup);

  const renderDefaultComponent = () =>
    render(<Modal data-testid="modal" {...defaultProps} />);

  it("There should be proper rendering with default props", () => {
    const { getByTestId } = renderDefaultComponent();
    const element = getByTestId("modal") as HTMLDivElement;
    expect(element).toBeInTheDocument();
  });

  const renderComponentDifferentProps = () =>
    render(<Modal data-testid="modal" {...differentProps} />);

  it("There should be proper rendering based on different props", () => {
    const { getByTestId } = renderComponentDifferentProps();
    const element = getByTestId("modal") as HTMLDivElement;
    expect(element).toBeInTheDocument();
  });
});
