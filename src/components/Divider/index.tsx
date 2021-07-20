import React from "react";
import classnames from "classnames";
import { Theme } from "../../constants/theme";
import { createUseStyles } from "react-jss";
// 也可也直接用宽高的背景色来实现divider组件
type DividerProps = {
  vertical?: boolean;
  color?: string;
  dashed?: boolean;
  cssOptions?: React.CSSProperties;
};

type RuleNames = "divider";

const useStyles = createUseStyles<RuleNames, DividerProps, Theme>((theme) => ({
  divider: ({ color, vertical, cssOptions, dashed }) => ({
    // borderWidth: "thin 0 0",

    ...(vertical
      ? {
          display: "inline",
          borderLeft: "1px " + (dashed ? "dashed" : "solid"),
          width: 0,
          maxWidth: 0,
          borderLeftColor: color || theme.backgroundColorDefault,
        }
      : {
          borderTop: "1px " + (dashed ? "dashed" : "solid"),
          height: 0,
          maxHeight: 0,
          borderTopColor: color || theme.backgroundColorDefault,
        }),
    ...cssOptions,
  }),
}));

/**
 * Divider :
 * if vertical == true , must set the cssOptions.height
 */
const Divider = ({
  vertical = false,
  dashed = false,
  color,
  cssOptions,
  className,
  children,
  ...props
}: DividerProps & React.ComponentPropsWithoutRef<"hr">) => {
  const classes = useStyles({
    vertical,
    dashed,
    color,
    cssOptions,
  });

  const computedClassNames = classnames(classes.divider, className);
  return <hr className={computedClassNames} {...props} />;
};

export default Divider;
