import React from "react";
import classnames from "classnames";
import type { CardPropsWithHTMLAttributes } from "./Card.types";
import { Container } from "../Container";
import useStyles from "../../hooks/useStyles";

const Card = ({
  className,
  children,
  ...props
}: CardPropsWithHTMLAttributes) => {
  const classes = useStyles(
    (theme) => ({
      card: {
        boxShadow:
          "rgb(17 17 26 / 5%) 0px 4px 16px, rgb(17 17 26 / 5%) 0px 8px 32px",
        borderRadius: "4px",
        minHeight: "2em",
      },
    }),
    {},
    { classNamePrefix: "Card" }
  );
  const cns = classnames(classes.card, className);
  return (
    <div className={cns} {...props}>
      <Container className={cns} {...props}>
        {children}
      </Container>
    </div>
  );
};
export default Card;
