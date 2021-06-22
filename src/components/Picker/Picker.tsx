import React, { useState } from "react";
import classnames from "classnames";
import type { PickerPropsWithHTMLAttributes } from "./Picker.types";
import useStyles from "../../hooks/useStyles";

const Picker = ({
  data = [],
  className,
  children,
  ...props
}: PickerPropsWithHTMLAttributes) => {
  const classes = useStyles(
    (theme) => ({
      picker: {},
    }),
    {},
    { classNamePrefix: "Picker" }
  );

  const cns = classnames(classes.picker, className);
  return (
    <>
      <div className="picker-list">
        <div className="picker-roller" ref="roller"></div>
        <div className="picker-content"></div>
        <div className="picker-indicator"></div>
      </div>
    </>
  );
};

export default Picker;
