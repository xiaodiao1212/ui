import React from "react";
import classnames from "classnames";
import { CollapseProps } from "./Collapse.types";
import useStyles from "../../hooks/useStyles";

const Collapse = ({
  title,
  expand = false,
  content,
  className,
  ...props
}: CollapseProps) => {
  const classes = useStyles(
    (theme) => ({
      collapse: {
        borderBottom: "#ccc",
        borderWidth: 1,
        borderBottomStyle: "solid",
        padding: "1em 0",
      },
      content: {
        padding: "0.5em",
        color: "#666",
      },
      flex: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      },
      title: {
        fontWeight: "700",
        flex: "8",
      },
      icon: {
        flex: "1",
      },
      arrow: {
        marginLeft: "1em",
        width: "0.6em",
        height: "0.6em",
        borderTop: "1px solid #666",
        borderRight: "1px solid #666",
        transform: "rotate(135deg)",
        transition: "transform 0.1s ease-in",
      },
      "arrow-up": {
        transform: "rotate(-45deg)",
        transition: "transform 0.1s ease-in",
      },
    }),
    {
      expand,
    },
    { classNamePrefix: "Collapse" }
  );
  const handleClickExpand = () => {
    props?.onClickExpand();
  };
  const cns = classnames(classes.collapse, className);
  const cnsContent = classnames(classes.content, className);
  const cnsIcon = classnames(classes.icon, className);
  const cnsArrow = classnames(classes.arrow, { [classes["arrow-up"]]: expand });
  return (
    <section className={cns}>
      <article className="flex">
        <div className="title">{title}</div>
        <div className={cnsIcon}>
          <div className={cnsArrow} onClick={handleClickExpand} />
        </div>
      </article>
      {expand && <article className={cnsContent}>{content}</article>}
    </section>
  );
};

export default Collapse;
