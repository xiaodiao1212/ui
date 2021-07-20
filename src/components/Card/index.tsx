import React from "react";
import classnames from "classnames";
import { Theme } from "../../constants/theme";
import { createUseStyles } from "react-jss";
import { palette } from "../..";

type CardProps = {
  borderRadius?: string;
  boxShadow?: string;
  cssOptions?: React.CSSProperties;
};

type RuleNames = "card";

const useStyles = createUseStyles<RuleNames, CardProps, Theme>((theme) => ({
  card: ({ boxShadow, borderRadius, cssOptions }) => ({
    background: theme.backgroundColorDefault || palette.common.white,
    boxShadow: boxShadow || "",
    // "rgb(17 17 26 / 5%) 0px 4px 16px, rgb(17 17 26 / 5%) 0px 8px 32px",
    // border: "1px solid " + palette.common.white,
    borderRadius: borderRadius || theme.borderRadiusDefault || "4px",
    minHeight: "2em",
    ...cssOptions,
  }),
}));
const Card = ({
  borderRadius,
  boxShadow,
  cssOptions,
  className,
  children,
  ...props
}: CardProps & React.ComponentProps<"div">) => {
  const classes = useStyles({ borderRadius, boxShadow, cssOptions });
  const computedClassNames = classnames(classes.card, className);
  return (
    <div className={computedClassNames} {...props}>
      {children}
    </div>
  );
};
export default Card;
