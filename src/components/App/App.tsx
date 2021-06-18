import React from "react";
import { AppProps } from "./App.types";
import { ThemeProvider } from "react-jss";
import { theme } from "../../constants/theme";

const App = ({ children }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <div data-testid="app">{children}</div>
    </ThemeProvider>
  );
};

export default App;
