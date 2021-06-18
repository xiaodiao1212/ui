import React from "react";
import classnames from "classnames";
import { RowPropsWithHTMLAttributes } from "./Row.types";
import useStyles from "../../hooks/useStyles";
const Row = ({
  align,
  justify,
  gutter,
  children,
  className,
  ...restProps
}: RowPropsWithHTMLAttributes) => {
  const classes = useStyles(
    (theme) => ({
      row: (props) => ({
        display: "flex",
        justifyContent: props.justify,
        alignItems: props.align,
        gap: props.gutter,
      }),
      gutter: (props) => ({
        // marginLeft: props.gutter,
      }),
    }),
    {
      align,
      justify,
      gutter,
    },
    { classNamePrefix: "Row" }
  );
  const cns = classnames(classes.row, className);
  const childClasses = classnames(classes.gutter);
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
