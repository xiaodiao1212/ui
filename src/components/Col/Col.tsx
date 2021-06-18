import React from "react";
import classnames from "classnames";
import type { ColPropsWithHTMLAttributes } from "./Col.types";
import useStyles from "../../hooks/useStyles";

//TODO Col组件的参数配置，联动
const Col = ({
  alignSelf,
  flex = "1",
  className,
  children,
  ...props
}: ColPropsWithHTMLAttributes) => {
  const classes = useStyles(
    (theme) => ({
      col: (props) => ({
        ...props,
      }),
    }),
    {
      alignSelf,
      flex,
    },
    { classNamePrefix: "Col" }
  );
  console.log("col className", className);

  const cns = classnames(classes.col, className);
  return (
    <div className={cns} {...props}>
      {children}
    </div>
  );
};

export default Col;
