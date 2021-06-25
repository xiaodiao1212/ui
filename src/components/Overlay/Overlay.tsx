import React, { useCallback, useEffect, useState } from "react";
import classnames from "classnames";
import { OverlayPropsWithHTMLAttributes } from "./Overlay.types";
import { Card } from "../Card";
import { useStyles } from "../../hooks";

const Overlay = ({
  opacity = 0.46,
  show = false,
  zIndex = 100,
  shy = true,
  className,
  children,
  ...props
}: OverlayPropsWithHTMLAttributes) => {
  const [_show, setShow] = useState(show);
  const _classes = useStyles(
    (theme) => ({
      overlay: {
        position: "fixed",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: theme?.overlay?.backgroundColor || "rgb(33, 33, 33)",
        borderColor: theme?.overlay?.borderColor || "rgb(33, 33, 33)",
        zIndex: (props) => props.zIndex,
        opacity: (props) => props.opacity,
        display: (props) => (props.show ? "flex" : "none"),
      },
    }),
    { show, opacity, zIndex },
    { classNamePrefix: "Overlay" }
  );

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (shy) setShow((s) => !s);
    props?.onClick(e);
  };
  const _cns = classnames(_classes.overlay, className);
  return (
    show &&
    _show && (
      <div
        data-testid="overlay"
        className={_cns}
        {...props}
        onClick={handleClick}
      >
        {children}
      </div>
    )
  );
};

export default Overlay;
