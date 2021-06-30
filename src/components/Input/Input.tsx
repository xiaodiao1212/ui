import React, { useState } from "react";
import classnames from "classnames";
import useStyles from "../../hooks/useStyles";
import palette from "../../constants/palette";
type InputProps = {} & React.ComponentPropsWithoutRef<"input">;

const Input = ({ children, className, ...props }: InputProps) => {
  const classes = useStyles(
    (theme) => ({
      input: {
        padding: theme?.paddingInput || "12px",
        backgroundColor: theme?.backgroundColorInput || palette.grey[100],
        color: theme?.colorText || palette.grey[900],
      },
    }),
    {},
    { classNamePrefix: "Input" }
  );
  const cns = classnames(classes.input, className);
  return <input className={cns} {...props} />;
};

export default Input;
