import React, { useState } from "react";
import classnames from "classnames";
import { ChipProps } from "./Chip.types";
import palette from "../../constants/palette";
import useStyles from "../../hooks/useStyles";

const Chip = ({
  outline = false,
  color,
  backgroundColor,
  borderRadius,
  children,
  className,
  ...props
}: ChipProps) => {
  const classes = useStyles(
    (theme) => ({
      chip: ({ outline, color, backgroundColor, borderRadius }) => ({
        display: "inline-flex",
        color: color || theme?.colorText || palette.grey[900],
        borderRadius: borderRadius || "16px",
        ...(!outline
          ? {
              backgroundColor:
                backgroundColor || theme?.colorPrimary || "white",
            }
          : {}),
      }),
    }),
    { outline, color, backgroundColor, borderRadius },
    { classNamePrefix: "Chip" }
  );

  const cns = classnames(classes.chip, className);
  return (
    <div className={cns} {...props}>
      {children}
    </div>
  );
};

export default Chip;
