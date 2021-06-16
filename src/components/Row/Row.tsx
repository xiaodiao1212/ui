import React, {

} from "react";
import classnames from "classnames";
import { RowProps } from "./Row.types";

import "../../index.css";

const Row: React.FC<RowProps> = (props) => {
  const {
    align,
    justify,
    tag,
    gutters,
    children,
    className,
    style,
    ...restProps
  } = props;

  const classes = classnames('row', {
  },className);
  const childClasses = classnames({});
  return (
    <div className={classes} style={style} {...restProps}>
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
