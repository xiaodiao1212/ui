import React, { useState } from "react";
import classnames from "classnames";
import useStyles from "../../hooks/useStyles";

type AlertPropsWithHTMLAttributes =
  {} & React.ComponentPropsWithoutRef<"aside">;

const Alert = ({
  children,
  className,
  ...props
}: AlertPropsWithHTMLAttributes) => {
  const [visivle, setVisible] = useState(true);
  const classes = useStyles(
    (theme) => ({
      alert: {
        padding: 20,
        backgroundColor: "#f44336",
        color: "white",
        display: visivle ? "flex" : "none",
      },
      closebtn: {
        marginLeft: 15,
        color: "white",
        fontWeight: "bold",
        float: "right",
        fontSize: 22,
        lineHeight: 20,
        cursor: "pointer",
        transition: "0.3s",
      },
      "closebtn:hover": {
        fontSize: 24,
      },
    }),
    {},
    { classNamePrefix: "Alert" }
  );
  const handleClickCloseBtn = (e: any) => {
    setVisible(false);
  };
  const cns = classnames(classes.alert, className);
  return (
    <aside className={cns} {...props}>
      <span className="closebtn" onClick={handleClickCloseBtn}>
        &times;
      </span>
      {children}
    </aside>
  );
};

export default Alert;
