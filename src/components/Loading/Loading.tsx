import React from "react";
import classnames from "classnames";
import type { LoadingProps } from "./Loading.types";
import useStyles from "../../hooks/useStyles";

const Loading = ({
  duration = "1s",
  width = "5em",
  borderWidth = "16px",
  color = "#555",
  backgroudColor = "#f3f3f3",
  className,
}: LoadingProps) => {
  const classes = useStyles(
    (theme) => ({
      loading: ({ borderWidth, width, duration, color, backgroudColor }) => ({
        border: `${borderWidth} solid ${backgroudColor}`,
        borderTop: `${borderWidth} solid ${color}`,
        borderRadius: "50%",
        width: width,
        height: width,
        animation: `spin ${duration}s linear infinite`,
      }),
      "@keyframes spin": {
        "0%": {
          transform: "rotate(0deg)",
        },
        "100%": {
          transform: "rotate(360deg)",
        },
      },
    }),
    {
      backgroudColor,
      color,
      borderWidth,
      width,
      duration,
    },
    { classNamePrefix: "Loading" }
  );
  const cns = classnames(classes.loading, className);
  return <div className={cns} />;
};

export default Loading;
