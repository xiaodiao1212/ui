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
      card: {},
    }),
    {},
    { classNamePrefix: "Card" }
  );
  const cns = classnames(classes.card, className);
  return (
    <div className={cns} {...props}>
      <Container>{children}</Container>
    </div>
  );
};
Card.Header = () => <div></div>;
Card.Content = () => <div></div>;
Card.Footer = () => <div></div>;
export default Card;
