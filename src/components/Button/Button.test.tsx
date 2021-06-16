import React from "react";
import {
  render,
  cleanup,
  fireEvent,
  RenderResult,
} from "@testing-library/react";

import Button from "./Button";
import { ButtonProps } from "./Button.types";

describe("Test Button", () => {
  let defaultProps: ButtonProps;
  let differentProps: ButtonProps;
  let linkProps: ButtonProps;
  let disabledProps: ButtonProps;
  beforeEach(() => {
    defaultProps = {
      onClick: jest.fn(),
    };
    differentProps = {
      block: true,
      text: true,
      outlined: true,

      rounded: true,

      color: "primary",

      flat: false,
    };

    disabledProps = {
      onClick: jest.fn(),
      disabled: true,
    };
  });

  afterEach(cleanup);

  const renderComponentDefaultProps = () =>
    render(<Button {...defaultProps}>Button</Button>);

  it("There should be proper rendering with default props", () => {
    const { getByText } = renderComponentDefaultProps();
    const element = getByText("Button") as HTMLButtonElement;
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual("BUTTON");
    fireEvent.click(element);
    expect(defaultProps.onClick).toHaveBeenCalled();
    expect(element.disabled).toBeFalsy();
  });

  const renderComponentDifferentProps = () =>
    render(<Button {...differentProps}>Button</Button>);

  it("There should be proper rendering based on different props", () => {
    const { getByText } = renderComponentDifferentProps();
    const element = getByText("Button") as HTMLButtonElement;
    expect(element).toBeInTheDocument();
  });

  const renderComponentLinkProps = () =>
    render(<Button {...linkProps}>Button</Button>);

  it("There should be proper rendering when link set to true", () => {
    const { getByText } = renderComponentLinkProps();
    const element = getByText("Button") as HTMLButtonElement;
    expect(element).toBeInTheDocument();
  });

  const renderDisabledPropsComponent = () =>
    render(<Button {...disabledProps}>Button</Button>);
  it("There should be proper rendering when disabled set to true", () => {
    const { getByText } = renderDisabledPropsComponent();
    const element = getByText("Button") as HTMLButtonElement;
    expect(element).toBeInTheDocument();

    expect(element.disabled).toBeTruthy();
    fireEvent.click(element);
    expect(disabledProps.onClick).not.toHaveBeenCalled();
  });
});
