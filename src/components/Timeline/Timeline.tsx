import React from "react";
import classnames from "classnames";
import type { TimelineProps, TimelineItem } from "./Timeline.types";
import { useStyles } from "../../hooks";
const Timeline = ({
  lineWidth = 6,
  lineColor,
  data = [],
  className,
}: TimelineProps) => {
  const classes = useStyles(
    (theme) => ({
      timeline: {
        position: "relative",
        maxWidth: 1200,
        margin: "0 auto",
      },
      "timeline::after": ({ lineColor, lineWidth }) => ({
        content: '""',
        position: "absolute",
        width: `${lineWidth}px`,
        backgroundColor: lineColor || theme?.palette?.common?.white || "white",
        top: "0",
        bottom: "0",
        left: "50%",
        marginLeft: -lineWidth / 3,
      }),
      container: {
        padding: "10px 40px",
        position: "relative",
        backgroundColor: "inherit",
        width: "50%",
      },
      "container::after": {
        content: '""',
        position: "absolute",
        width: 25,
        height: 25,
        right: -17,
        backgroundColor: "white",
        border: "4px solid #ff9f55",
        top: 15,
        borderRadius: "50%",
        zIndex: "1",
      },
      left: {
        left: "0",
      },
      right: {
        left: "50%",
      },
      "left::before": {
        content: '" "',
        height: "0",
        position: "absolute",
        top: 22,
        width: "0",
        zIndex: "1",
        right: 30,
        border: "medium solid white",
        borderWidth: "10px 0 10px 10px",
        borderColor: "transparent transparent transparent white",
      },
      "right::before": {
        content: '" "',
        height: "0",
        position: "absolute",
        top: 22,
        width: "0",
        zIndex: "1",
        left: 30,
        border: "medium solid white",
        borderWidth: "10px 10px 10px 0",
        borderColor: "transparent white transparent transparent",
      },
      "right::after": {
        left: -16,
      },
      content: {
        padding: "20px 30px",
        backgroundColor: "white",
        position: "relative",
        borderRadius: 6,
      },
      "@media screen and (max-width: 600px)": {
        "timeline::after": {
          left: 31,
        },
        container: {
          width: "100%",
          paddingLeft: 70,
          paddingRight: 25,
        },
        "container::before": {
          left: 60,
          border: "medium solid white",
          borderWidth: "10px 10px 10px 0",
          borderColor: "transparent white transparent transparent",
        },
        "left::after,  right::after": {
          left: 15,
        },
        right: {
          left: "0%",
        },
      },
    }),

    { lineWidth, lineColor },
    { classNamePrefix: "Timeline" }
  );
  const cns = classnames(classes.timeline, className);

  const cnsChildContent = classnames(classes.content);

  const getTimelineItemClassNames = (item: TimelineItem) => {
    return classnames(
      classes.container,
      item.direction == "left" ? classes.left : classes.right
    );
  };
  return (
    <div className={cns}>
      {data &&
        data.map((v) => (
          <div className={getTimelineItemClassNames(v)}>
            <div className={cnsChildContent}>
              <h2>{v.title}</h2>
              <p>{v.content}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Timeline;
