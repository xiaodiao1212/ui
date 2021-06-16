import React from "react";
import {useGlobalStyles} from "../../hooks"

const CSSBaseline = (): JSX.Element => {
  useGlobalStyles()
  return <div data-testid="CSSBaseline"/>;
};

export default CSSBaseline;
