import { ThemeProvider, Global, CSSObject } from '@emotion/react';
import { useCallback } from 'react';
import { globalStyles } from '../../styles/global';
import { theme as defaultTheme, Theme } from '../../styles/themes';
import { deepMerge } from '../../utils';

type AppProps = {
  children?: React.ReactNode;
  theme?: object;
};

const App = ({ children, theme }: AppProps) => {
  const computedTheme = useCallback(() => deepMerge(defaultTheme, theme || {}), [theme]);
  return (
    <ThemeProvider theme={computedTheme()}>
      <Global styles={globalStyles as CSSObject} />
      {children}
    </ThemeProvider>
  );
};

export default App;
