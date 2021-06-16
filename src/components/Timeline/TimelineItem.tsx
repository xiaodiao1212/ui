import React, { useContext } from "react";
import classnames from "classnames";
import { TimelineItemProps } from "./TimelineItem.types";

const TimelineItem: React.FC<TimelineItemProps> = (props) => {
  const { className, disabled, style, children, index } = props;


  const classes = classnames(
    "tab",
    {
      "tab-disabled": disabled,

    },
    className
  );
  return (
    <li className={classes} style={style}>
      {children}
    </li>
  );
};

export default TimelineItem;
