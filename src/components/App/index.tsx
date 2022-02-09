import { ThemeProvider, Global, css } from '@emotion/react';
import { createContext, forwardRef, useCallback, useRef } from 'react';
import { defaultStyle } from '../../constants/style';
import { theme as defaultTheme, Theme } from '../../constants/theme';
import { system as defaultSystem, System } from '../../constants/system';
import { deepMerge } from '../../utils';

type AppProps = {
  children?: React.ReactNode;
  theme?: Theme;
  system?: System;
};
export const AppContext = createContext<System>(defaultSystem);

const App = ({ children, theme, system }: AppProps) => {
  const computedTheme = useCallback(() => deepMerge(defaultTheme, theme || {}), [theme]);
  const computedSystem = useCallback(() => deepMerge(defaultSystem, system || {}), [system]);
  return (
    <ThemeProvider theme={computedTheme()}>
      <AppContext.Provider value={computedSystem()}>
        <Global styles={defaultStyle as any} />
        {children}
      </AppContext.Provider>
    </ThemeProvider>
  );
};

export default App;
