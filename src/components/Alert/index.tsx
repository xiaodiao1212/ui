import React, { useState } from "react";
import { createUseStyles, useTheme } from "react-jss";
import classnames from "classnames";
import { Theme } from "../../constants/theme";

type AlertProps = { show: boolean };

type RuleNames = "alert" | "closebtn" | "closebtn:hover";

const useStyles = createUseStyles<RuleNames, { visible: boolean }, Theme>(
  (theme) => ({
    alert: {
      padding: 20,
      backgroundColor: "#f44336",
      color: "white",
      display: ({ visible }) => (visible ? "flex" : "none"),
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
  })
);

const Alert = ({
  show = false,
  children,
  className,
  ...props
}: AlertProps & React.ComponentPropsWithoutRef<"aside">) => {
  const [visible, setVisible] = useState(show);
  const theme = useTheme<Theme>();
  const handleClickCloseBtn = (e: any) => {
    setVisible(false);
  };
  const classes = useStyles({ visible, theme });
  const computedClassNames = classnames(classes.alert, className);
  return (
    <aside className={computedClassNames} {...props}>
      <span className="closebtn" onClick={handleClickCloseBtn}>
        &times;
      </span>
      {children}
    </aside>
  );
};

export default Alert;
