import React from "react";
import classnames from "classnames";
import type {
  ContainerPropsWithHTMLAttributes,
} from "./container.types";
import useStyles from "../../hooks/useStyles";

const Container = ({
  noPadding = false,
  noYPadding = false,
  noXPadding = false,
  padding = "1em",
  fullHeight = false,
  className,
  children,
  ...props
}: ContainerPropsWithHTMLAttributes) => {
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
    { classNamePrefix: "Container" }
  );
  const cns = classnames(classes.container, className);
  return (
    <div className={cns} {...props}>
      {children}
    </div>
  );
};

export default Container;
