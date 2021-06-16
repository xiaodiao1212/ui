import React, { useCallback, useEffect, useState } from "react";
import classnames from "classnames";
import { OverlayProps } from "./Overlay.types";
import { createUseStyles } from "react-jss";
import { Theme } from "../../constants/theme";
const useStylesFromThemeFunction = createUseStyles(
  (theme:Theme) => ({
    
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      backgroundColor: theme.overlay.backgroundColor,
      borderColor: theme.overlay.borderColor,
      zIndex: (props) => props.zIndex,
      opacity: (props) => props.opacity,
      display: (props) => (props.show ? "flex" : "none"),
    },
  }),
  { classNamePrefix: "Overlay" }
);

// TODO: shy 功能的实现，即点击消失

const Overlay = ({
  opacity = 0.46,
  show = false,
  zIndex = 100,
  shy = true,
  className,
  children,
  ...props
}: OverlayProps) => {
  const classes = useStylesFromThemeFunction({ show, opacity, zIndex });
  const cns = classnames(classes.overlay, className);
  return (
    <div data-testid="overlay" className={cns} {...props}>
      {children}
    </div>
  );
};

export default Overlay;
