import React, { useContext } from "react";
import classnames from "classnames";
import { TabProps } from "./Tab.types";
import { TabsContext } from "./Tabs";
const Tab: React.FC<TabProps> = (props) => {
  const { className, disabled, style, children, index } = props;
  const context = useContext(TabsContext);
  const handleClick = () => {
    if (context.onSelect && !disabled && (typeof index === 'number')) {
      context.onSelect(index);
    }
  };
  const classes = classnames(
    "tab",
    {
      "tab-disabled": disabled,
      "tab-active": index === context.index,
    },
    className
  );
  return (
    <li className={classes} style={style} onClick={handleClick}>
      {children}
    </li>
  );
};

export default Tab;
