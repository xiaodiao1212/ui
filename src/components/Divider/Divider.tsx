import React from "react";
import classnames from "classnames";
import { DividerPropsWithHTMLAttributes } from "./Divider.types";
import useStyles from "../../hooks/useStyles";

const Divider = ({
  vertical = false,
  className,
  children,
  ...props
}: DividerPropsWithHTMLAttributes) => {
  const classes = useStyles(
    (theme) => ({
      divider: (props) => ({
        ...(props.vertical
          ? {
              borderLeft: "1px solid",
            }
          : { borderTop: "1px solid" }),
        position: "relative",
      }),
    }),
    {
      vertical,
    },
    { classNamePrefix: "Divider" }
  );
  
  const cns = classnames(classes.divider, className);
  return <div className={cns} {...props}/>
     
  
};

export default Divider;
