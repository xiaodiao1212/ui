import React from "react";
import classnames from "classnames";
import { CSSBaselineProps } from "./CSSBaseline.types";
import {useStyles,useGlobalStyles} from "../../hooks"

const CSSBaseline = ({ children }: CSSBaselineProps): JSX.Element => {
  useGlobalStyles()
  return <div data-testid="CSSBaseline">{children}</div>;
};

export default CSSBaseline;
