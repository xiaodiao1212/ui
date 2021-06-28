import React from "react";
import classnames from "classnames";
import { DividerProps } from "./Divider.types";
import useStyles from "../../hooks/useStyles";

const Divider = ({
  vertical = false,
  dashed = false,
  className,
  children,
  ...props
}: DividerProps) => {
  const classes = useStyles(
    (theme) => ({
      divider: (props) => ({
        ...(props.vertical
          ? {
              borderLeft: "1px solid",

              maxHeight: "100%",
              width: 0,
              maxWidth: 0,
            }
          : {
              borderTop: "1px solid",

              maxWidth: "100%",
              height: 0,
              maxHeight: 0,
            }),
        border: props.dashed ? "dashed" : "solid",
        borderWidth: "thin 0 0",
        transition: "inherit",
      }),
    }),
    {
      vertical,
      dashed,
    },
    { classNamePrefix: "Divider" }
  );

  const cns = classnames(classes.divider, className);
  return <hr className={cns} {...props} />;
};

export default Divider;
