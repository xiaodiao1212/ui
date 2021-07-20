import React from "react";
import classnames from "classnames";
import { createUseStyles } from "react-jss";
import { Theme } from "../../constants/theme";
type ProgressProps = {
  percent?: number;
  backgroundColor?: string;
  color?: string;
};
type RuleNames = "progress" | "bar";
const useStyles = createUseStyles<RuleNames, ProgressProps, Theme>((theme) => ({
  progress: ({ backgroundColor }) => ({
    backgroundColor: backgroundColor || theme?.palette?.grey["300"] || "grey",
  }),
  bar: ({ color }) => ({
    backgroundColor: color || theme?.colorPrimary || "#3f51b5",
  }),
}));
const Progress = ({
  percent = 0,
  backgroundColor,
  color,
  className,
  ...props
}: ProgressProps & React.ComponentProps<"div">) => {
  const classes = useStyles({
    backgroundColor,
    color,
    percent,
  });
  const computedClassNames = classnames(classes.progress, className);
  const clsnsBar = classnames(classes.bar, className);
  return (
    <div className={computedClassNames} {...props}>
      <div className={clsnsBar}></div>
    </div>
  );
};

export default Progress;
