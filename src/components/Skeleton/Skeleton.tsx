import React from "react";
import classnames from "classnames";
import type { SkeletonProps } from "./Skeleton.types";
import useStyles from "../../hooks/useStyles";

const Skeleton = ({
  duration = 1,
  delay = 0,
  circle = false,
  style,
  className,
  ...circleProps
}: SkeletonProps) => {
  const classes = useStyles(
    (theme) => ({
      skeleton: (props) => ({
        minHeight: "2em",
        borderRadius: "4px",
        background:
          "linear-gradient(90deg,rgba(255, 255, 255, 0) 40%,rgba(255, 255, 255, .5) 50%,rgba(255, 255, 255, 0) 60%) " +
            theme?.palette?.grey[300] || "#e0e0e0",
        backgroundSize: "200% 100%",
        backgroundPositionX: "180%",
        animation: props.duration + "s $loading ease-in-out infinite",
        animationDelay: props.delay + "s",
      }),
      "skeleton-circle": (props) => ({
        width: props.circleProps.width,
        height: props.circleProps.height,
        border: "1px solid " + theme?.palette?.grey[300] || "#e0e0e0",
        borderRadius: "50%",
      }),
      "@keyframes loading": {
        to: {
          backgroundPositionX: "-20%",
        },
      },
    }),
    {
      duration,
      delay,
      circleProps,
    },
    { classNamePrefix: "Skeleton" }
  );
  const cns = classnames(classes.skeleton, className);
  const cnsCircle = classnames(
    classes.skeleton,
    classes["skeleton-circle"],
    className
  );
  return (
    <div
      data-testid="skeleton"
      className={circle ? cnsCircle : cns}
      style={style}
    />
  );
};

export default Skeleton;
