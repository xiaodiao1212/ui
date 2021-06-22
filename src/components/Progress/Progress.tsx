import React from "react";
import classnames from "classnames";
import type { ProgressPropsWithHTMLAttributes } from "./Progress.types";
import useStyles from "../../hooks/useStyles";

const Progress = ({
  noPadding = false,
  noYPadding = false,
  noXPadding = false,
  padding = "1em",
  fullHeight = false,
  className,
  children,
  ...props
}: ProgressPropsWithHTMLAttributes) => {
  const classes = useStyles(
    (theme) => ({
      container: {
        height: (props) => (props.fullHeight ? "100%" : "auto"),
        padding: (props) => {
          if (props.noPadding) return "";
          else if (props.noYPadding) return "0 " + props.padding;
          else if (props.noXPadding) return props.padding + " 0";
          else return props.padding;
        },
      },
    }),
    {
      noPadding,
      padding,
      noYPadding,
      noXPadding,
      fullHeight,
    },
    { classNamePrefix: "Progress" }
  );
  const cns = classnames(classes.container, className);
  return (
    <div className={cns} {...props}>
      {children}
    </div>
  );
};

export default Progress;
