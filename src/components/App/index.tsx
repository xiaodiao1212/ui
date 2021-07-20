import React from "react";
import { ThemeProvider,createUseStyles } from "react-jss";
import defaultStyle from "../../constants/style"
import { theme, Theme } from "../../constants/theme";
type AppProps = {
  customTheme?: Theme;
} & React.ComponentPropsWithoutRef<"div">;
const useDefaultStyle = createUseStyles(defaultStyle)
const App = ({ children, customTheme }: AppProps) => {
  useDefaultStyle()
  return (
    <ThemeProvider theme={customTheme || theme}>
      <div data-testid="app">{children}</div>
    </ThemeProvider>
  );
};

export default App;
