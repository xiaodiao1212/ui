import React, { CSSProperties, useState } from "react";
import { createUseStyles, useTheme } from "react-jss";
import classnames from "classnames";
import { Theme } from "../../constants/theme";
type TextProps = Partial<{
  blod: boolean;
  color: string | string;
  fontSize: string;
  fontWeight: number;
  dark: boolean;
  span: boolean;
  cssOptions?: React.CSSProperties;
}>;

type RuleNames = "text";

const useStyles = createUseStyles<RuleNames, TextProps, Theme>((theme) => ({
  text: ({ color, dark, blod, fontWeight, cssOptions, span, ...props }) => ({
    ...props,
    fontWeight: fontWeight || (blod ? "700" : "500"),
    display: span ? "inline-block" : "block",
    color:
      color ||
      (dark
        ? theme.colorTextInDark || "#fff"
        : theme.colorTextInLight || "#2e2e2e"),
    // display: "contents",
    ...cssOptions,
  }),
}));

const Text = ({
  dark = false,
  blod = false,
  span = false,
  fontWeight,

  fontSize,
  color,
  children,
  cssOptions,
  className,
  ...props
}: TextProps & React.ComponentProps<"div">) => {
  const classes = useStyles({
    color,
    fontSize,
    blod,
    span,
    fontWeight,
    dark,
    cssOptions,
  });
  const computedClassNames = classnames(classes.text, className);
  return (
    <div className={computedClassNames} {...props}>
      {children}
    </div>
  );
};

export default Text;
