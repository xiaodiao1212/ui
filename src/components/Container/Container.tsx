import React, { useCallback, useEffect, useState } from "react";
import classnames from "classnames";
import { ContainerProps } from "./Container.types";
import { createUseStyles } from "react-jss";
import { Theme } from "../../constants/theme";
const useStylesFromThemeFunction = createUseStyles(
  (theme: Theme) => ({
  
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
  { classNamePrefix: "Container" }
);

const Container = ({
  noPadding = false,
  noYPadding = false,
  noXPadding = false,
  padding = "1em",
  fullHeight = false,
  className,
  children,
  ...props
}: ContainerProps) => {
  const classes = useStylesFromThemeFunction({
    noPadding,
    padding,
    noYPadding,
    noXPadding,
    fullHeight,
  });
  const cns = classnames(classes.container, className);
  return (
    <div className={cns} {...props}>
      {children}
    </div>
  );
};

export default Container;
