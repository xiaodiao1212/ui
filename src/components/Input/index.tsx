import React, { useState } from "react";
import classnames from "classnames";
import palette from "../../constants/palette";
import { createUseStyles } from "react-jss";
import { Theme } from "../../constants/theme";
import Col from "../Col";
import Row from "../Row";

type InputProps = {
  flex?: number;
  gap?: string;
  format?: (value: string) => string;
  prefix?: { node: React.ReactNode; flex: number };
  suffix?: { node: React.ReactNode; flex: number };
  border?: boolean;
  contain?: boolean;
  cssOptions?: React.CSSProperties;
};
type RuleNames = "input" | "input-container";

const useStyles = createUseStyles<
  RuleNames,
  InputProps & { disabled?: boolean },
  Theme
>((theme) => ({
  input: ({ cssOptions, disabled, border, contain }) => ({
    width: "100%",
    padding: theme?.paddingInput || ".6em",
    backgroundColor: contain
      ? theme?.backgroundColorInput || palette.grey[100]
      : disabled
      ? theme?.backgroundColorInput || palette.grey[100]
      : "transparent",

    color: disabled
      ? theme?.text.disabled
      : theme?.colorTextInLight || palette.common.white,
    border: border
      ? !disabled
        ? "1px solid " + theme?.border.color
        : "none"
      : "none",
    borderRadius: theme?.borderRadiusDefault || "4px",
    ...cssOptions,
  }),
  "input-container": ({ cssOptions, disabled, contain }) => ({
    backgroundColor: contain
      ? theme?.backgroundColorInput || palette.grey[100]
      : disabled
      ? theme?.backgroundColorInput || palette.grey[100]
      : "transparent",
    ...cssOptions,
  }),
}));

/**
 * Input:
 * if has prefix or suffix, the property flex is required.
 */
const Input = ({
  prefix,
  suffix,
  flex = 1,
  gap,
  contain = false,
  border = false,
  format,
  disabled,
  cssOptions,
  children,
  className,
  ...props
}: InputProps &
  Omit<React.ComponentPropsWithoutRef<"input">, "suffix" | "prefix">) => {
  const classes = useStyles({ cssOptions, disabled, border, contain });
  const computedClassNames = classnames(classes.input, className);
  const clsnsContainer = classnames(classes["input-container"], className);
  return prefix || suffix ? (
    <Row className={clsnsContainer} gap={gap}>
      {prefix && <Col flex={prefix.flex}>{prefix.node}</Col>}
      <Col flex={flex}>
        <input className={computedClassNames} {...props} />
      </Col>
      {suffix && <Col flex={suffix.flex}>{suffix.node}</Col>}
    </Row>
  ) : (
    <input className={computedClassNames} {...props} />
  );
};

export default Input;
