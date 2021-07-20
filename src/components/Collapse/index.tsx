import React from "react";
import classnames from "classnames";
import { Theme } from "../../constants/theme";
import { createUseStyles } from "react-jss";

export type CollapseProps = {
  title?: string;
  expand?: boolean;
  content?: string;
  onClickExpand?: () => void;
};

type RuleNames =
  | "collapse"
  | "content"
  | "flex"
  | "title"
  | "icon"
  | "arrow"
  | "arrow-up";

const useStyles = createUseStyles<RuleNames, CollapseProps, Theme>((theme) => ({
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
}));
const Collapse = ({
  title,
  expand = false,
  content,
  className,
  ...props
}: CollapseProps & React.ComponentProps<"div">) => {
  const classes = useStyles({
    expand,
  });
  const handleClickExpand = () => {
    props?.onClickExpand?.();
  };
  const computedClassNames = classnames(classes.collapse, className);
  const cnsContent = classnames(classes.content, className);
  const cnsIcon = classnames(classes.icon, className);
  const cnsArrow = classnames(classes.arrow, { [classes["arrow-up"]]: expand });
  return (
    <section className={computedClassNames}>
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
