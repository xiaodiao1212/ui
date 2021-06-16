import React, { useCallback, useEffect, useState } from "react";
import classnames from "classnames";
import { ButtonProps } from "./Button.types";
import { useStyles } from "../../hooks";

const Button = ({
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
}: ButtonProps) => {
  const classes = useStyles(
    {
      button: {},
    },
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
    <button className={cns} disabled={disabled} {...props}>
      {children}
    </button>
  );
};

export default Button;
