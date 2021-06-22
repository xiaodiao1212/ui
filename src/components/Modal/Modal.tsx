import React from "react";
import classnames from "classnames";
import type { ModalPropsWithHTMLAttributes } from "./Modal.types";
import { CSSTransition } from "react-transition-group";
import useStyles from "../../hooks/useStyles";

const Modal = ({
  show = false,
  className,
  children,
  ...props
}: ModalPropsWithHTMLAttributes) => {
  const classes = useStyles(
    (theme) => ({
      modal: {},
    }),
    {
      show,
    },
    { classNamePrefix: "Modal" }
  );
  const cns = classnames(classes.modal, className);
  return (
    <div className={cns} {...props}>
      {children}
    </div>
  );
};

export default Modal;
