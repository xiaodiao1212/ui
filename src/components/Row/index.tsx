import React from "react";
import classnames from "classnames";
import { createUseStyles } from "react-jss";
import { Theme } from "../../constants/theme";
type RuleNames = "row";

type RowAlign = "start" | "center" | "end" | "baseline" | "stretch";
type RowJustify = "start" | "center" | "end" | "space-around" | "space-between";

interface RowProps {
  vertical?: boolean;
  alignItems?: RowAlign;
  justifyContent?: RowJustify;
  gap?: string;
  wrap?: boolean;
  fullHeight?: boolean;
  cssOptions?: React.CSSProperties;
}

const useStyles = createUseStyles<RuleNames, RowProps, Theme>((theme) => ({
  row: ({ vertical, wrap, cssOptions, fullHeight, alignItems, ...props }) => ({
    display: "flex",
    width: "100%",
    // color: "transparent",
    flexDirection: vertical ? "column" : "row",
    height: fullHeight ? "100%" : "auto",
    gridGap: props?.gap,
    ...props,
    ...cssOptions,
    ...(vertical ? {} : { alignItems, flexWrap: wrap ? "wrap" : "nowrap" }),
  }),
}));

const Row = ({
  vertical = false,
  alignItems = "center",
  wrap = false,
  justifyContent,
  fullHeight,
  gap,
  cssOptions,
  children,
  className,
  ...restProps
}: RowProps & React.ComponentPropsWithoutRef<"div">) => {
  const classes = useStyles({
    fullHeight,
    alignItems,
    justifyContent,
    gap,
    wrap,
    vertical,
    cssOptions,
  });
  const computedClassNames = classnames(classes.row, className);
  const childClasses = classnames("");
  return (
    <div className={computedClassNames} {...restProps}>
      {children}
    </div>
  );
};
export default Row;
