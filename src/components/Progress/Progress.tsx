import React from "react";
import classnames from "classnames";
import type { ProgressProps } from "./Progress.types";
import useStyles from "../../hooks/useStyles";

const Progress = ({
  percent = 0,
  backgroundColor,
  color,
  className,
  ...props
}: ProgressProps) => {
  const classes = useStyles(
    (theme) => ({
      progress: ({ backgroundColor }) => ({
        backgroundColor:
          backgroundColor || theme?.palette?.grey["300"] || "grey",
      }),
      bar: ({ color }) => ({
        backgroundColor: color || theme?.colorPrimary || "#3f51b5",
      }),
    }),
    {
      backgroundColor,
      color,
      percent,
    },
    { classNamePrefix: "Progress" }
  );
  const cns = classnames(classes.progress, className);
  const cnsBar = classnames(classes.bar, className);
  return (
    <div className={cns} {...props}>
      <div className={cnsBar}></div>
    </div>
  );
};

export default Progress;
