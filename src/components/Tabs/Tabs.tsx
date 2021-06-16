import React, { useState, createContext } from "react";
import classnames from "classnames";
import { TabsProps, TabsContextType } from "./Tabs.types";
import { createUseStyles, useTheme, ThemeProvider } from "react-jss";
import { TabProps } from "./Tab.types";
import Tab from "./Tab";
export const TabsContext = createContext<TabsContextType>({ index: 0 });
export const Tabs: React.FC<TabsProps> = (props) => {
  const { className, mode, style, children, defaultIndex, onSelect } = props;
  const [currentActive, setActive] = useState(defaultIndex);
  const classes = classnames(
    "tabs",
    {
      "tabs-vertical": mode === "vertical",
    },
    className
  );
  const handleClick = (index: number) => {
    setActive(index);
    if (onSelect) {
      onSelect(index);
    }
  };
  const passedContext: TabsContextType = {
    index: currentActive ? currentActive : 0,
    onSelect: handleClick,
  };

  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement = child as React.FunctionComponentElement<TabProps>;
      const { displayName } = childElement.type;
      if (displayName === Tab.displayName) {
        return React.cloneElement(childElement, {
          index,
        });
      } else {
        console.error("Galaxy Design:Tabs has a child which is not a tab");
      }
    });
  };
  return (
    <ul data-testid="test-tabs" className={classes} style={style}>
      <TabsContext.Provider value={passedContext}>
        {renderChildren()}
      </TabsContext.Provider>
    </ul>
  );
};

Tabs.defaultProps = {
  defaultIndex: 0,
};

export default Tabs;
