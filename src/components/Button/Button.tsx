import React, { useCallback, useEffect, useState } from "react";
import classnames from "classnames";
import { ButtonPropsWithHTMLAttributes } from "./Button.types";
import { useStyles } from "../../hooks";

const Button = React.forwardRef<
  HTMLButtonElement,
  ButtonPropsWithHTMLAttributes
>(
  (
    {
      block = false,
      disabled = false,
      text = false,
      outlined = false,
      sizing = "normal",
      rounded = true,
      color = "primary",
      flat = false,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const classes = useStyles(
      (theme) => ({
        button: (props) => ({
          borderRadius: "0px",
          color: props.color === "" ? "white" : "black",
          fontSize: "14px",
          "&:hover": {
            textDecoration: "none",
            backgroundColor: "",
            "@media (hover: none)": {
              backgroundColor: "transparent",
            },
            "&$disabled": {
              backgroundColor: "transparent",
            },
          },
          "&$disabled": {
            color: "",
          },
        }),
      }),
      {
        block,
        disabled,
        text,
        outlined,
        sizing,
        rounded,
        color,
        flat,
      },
      { classNamePrefix: "Button" }
    );
    const cns = classnames(classes.button, className);
    return (
      <button ref={ref} className={cns} disabled={disabled} {...props}>
        {children}
      </button>
    );
  }
);

export default Button;
