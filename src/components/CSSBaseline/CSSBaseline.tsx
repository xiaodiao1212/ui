import React, { useEffect } from "react";
import { useGlobalStyles } from "../../hooks";

const CSSBaseline = (): JSX.Element => {
  useEffect(() => {
    useGlobalStyles();
  }, []);

  return <div data-testid="CSSBaseline" />;
};

export default CSSBaseline;
