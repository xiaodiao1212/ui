import React from "react";
import { ThemeProvider } from "react-jss";
import { theme, Theme } from "../../constants/theme";
type AppProps = {
  customTheme?: Theme;
} & React.ComponentPropsWithoutRef<"div">;
const App = ({ children, customTheme }: AppProps) => {
  return (
    <ThemeProvider theme={customTheme || theme}>
      <div data-testid="app">{children}</div>
    </ThemeProvider>
  );
};

export default App;
