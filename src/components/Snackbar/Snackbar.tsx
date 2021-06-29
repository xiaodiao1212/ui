import React, { useState } from "react";
import classnames from "classnames";
import { SnackbarPropsWithHTMLAttributes } from "./Snackbar.types";
import useStyles from "../../hooks/useStyles";

const Snackbar = ({
  show = false,
  children,
  className,
  ...props
}: SnackbarPropsWithHTMLAttributes) => {
  const classes = useStyles(
    (theme) => ({
      snackbar: ({ show }) => ({
        visibility: "hidden",
        minWidth: 250,
        marginLeft: -125,
        backgroundColor: "#333",
        color: "#333",
        textAlign: "center",
        borderRadius: 2,
        padding: 16,
        position: "fixed",
        zIndex: "1",
        left: "50%",
        bottom: 30,
        fontSize: 17,
        ...(show
          ? {
              visibility: "visible",
              webkitAnimation: "fadein 0.5s, fadeout 0.5s 2.5s",
              animation: "fadein 0.5s, fadeout 0.5s 2.5s",
            }
          : {}),
      }),
      "@keyframes fadein": {
        from: {
          bottom: "0",
          opacity: "0",
        },
        to: {
          bottom: 30,
          opacity: "1",
        },
      },
      "@keyframes fadeout": {
        from: {
          bottom: 30,
          opacity: "1",
        },
        to: {
          bottom: "0",
          opacity: "0",
        },
      },
    }),
    { show },
    { classNamePrefix: "Snackbar" }
  );

  const cns = classnames(classes.snackbar, className);
  return (
    <aside className={cns} {...props}>
      {children}
    </aside>
  );
};

export default Snackbar;
