import React from "react";
import classnames from "classnames";
import { RowPropsWithHTMLAttributes } from "./Row.types";

import useStyles from "../../hooks/useStyles";
const Row = ({
  align,
  justify,
  tag,
  gutters,
  children,
  className,
  ...restProps
}: RowPropsWithHTMLAttributes) => {
  const classes = useStyles(
    (theme) => ({
      row: (props) => ({
        display:'flex'
      }),
    }),
    {
      align,
      justify,
      tag,
      gutters,
    },
    { classNamePrefix: "Row" }
  );
  const cns = classnames(classes.row, className);
  const childClasses = classnames({});
  return (
    <div className={cns} {...restProps}>
      {React.Children.map(children, (child, index) => {
        const childCompoent = child as React.FunctionComponentElement<any>;
        return typeof child === "string"
          ? child
          : React.cloneElement(childCompoent, {
              index: index,
              className: childClasses + childCompoent.props.className,
            });
      })}
    </div>
  );
};
export default Row;
