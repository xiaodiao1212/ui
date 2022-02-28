import { ThemeProvider, Global, css } from '@emotion/react';
import { createContext, forwardRef, useCallback, useRef } from 'react';
import { defaultStyle } from '../../constants/style';
import { theme as defaultTheme, Theme } from '../../constants/theme';
import { deepMerge } from '../../utils';

type AppProps = {
  children?: React.ReactNode;
  theme?: Theme;
};

const App = ({ children, theme }: AppProps) => {
  const computedTheme = useCallback(() => deepMerge(defaultTheme, theme || {}), [theme]);
  return (
    <ThemeProvider theme={computedTheme()}>
      <Global styles={defaultStyle as any} />
      {children}
    </ThemeProvider>
  );
};

export default App;
