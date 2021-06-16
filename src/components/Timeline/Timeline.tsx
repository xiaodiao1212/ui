import React from "react";
import classnames from "classnames";
import type { TimelineProps } from "./Timeline.types";
import TimelineItem from "./TimelineItem";
import { createUseStyles, useTheme } from "react-jss";
//TODO timeline组件的规范，重构
type TimelineItemProps = React.ComponentProps<typeof TimelineItem>;
const Timeline = (props: TimelineProps) => {
  const { className, children } = props;
  const useStyles = createUseStyles({
    timeline: {
      position: "relative",
      height: "16em",
      width: "100%",
    },
    circle: {
      width: "1.2em",
      background: "#c66b57",
      height: "1.2em",
      borderRadius: "50px",
      textAlign: "center",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
    },
    line: {
      width: "0.1em",
      background: "#c66b57",
      height: "3em",
      margin: "0.5em 0 0.5em 0.6em",
    },
    content: {
      position: "absolute",
      top: "0",
      left: "2em",
    },
    "content' > div": {
      fontSize: "0.8em",
      paddingBottom: "1.5em",
      height: "5em",
    },
  });
  const theme = useTheme();
  const classes = useStyles({ ...props, theme });
  const style = classnames(classes.timeline);

  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement = child as React.FunctionComponentElement<
        TimelineItemProps
      >;
      const { displayName } = childElement.type;
      if (displayName === TimelineItem.displayName) {
        return React.cloneElement(childElement, {
          index,
        });
      } else {
        console.error(
          "Galaxy Design:Timeline has a child which is not a TimelinItem"
        );
      }
    });
  };
  return (
    <article className={classes.timeline}>
      <div>
        <div className={classes.circle}>1</div>
      </div>
      <div>
        <div className={classes.line}></div>
      </div>
      <div>
        <div className="circle">2</div>
      </div>
      <div>
        <div className="line"></div>
      </div>
      <div>
        <div className="circle">3</div>
      </div>
      <div className="content">
        <div>
          Puede guardar esta página del cupón en su teléfono móvil o encontrarla
          nuevamente aquí.
        </div>
        <div>
          Proporcione al cajero el código de barras y finalice el pago en
          efectivo en la tienda de OXXO.
        </div>
        <div>
          Actualizaremos un registro del reembolso de su préstamo después de
          recibir la notificación de que el reembolso se completó.
        </div>
      </div>
    </article>
  );
};
Timeline.defaultProps = {
  reverse: false,
  derection: "vertical",
};
export default Timeline;
