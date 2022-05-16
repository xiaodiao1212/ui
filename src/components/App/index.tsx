import { ThemeProvider, Global, CSSObject } from '@emotion/react';
import { useCallback, useEffect } from 'react';
import { globalStyles } from '../../styles/global';
import { theme as defaultTheme, Theme } from '../../styles/themes';
import { addCSSLink, deepMerge } from '../../utils';

type AppProps = {
  children?: React.ReactNode;
  theme?: object;
};

/**
 * Application
 * app组件和navigation、drawer、appbar、footer等组件配合使用，
 * 帮助你的应用围绕 <v-main> 组件进行适当的大小调整。
 * 这使你可以创建真正独特的界面，无需因管理布局尺寸而烦恼。
 * 所有应用都应该在app组件里这是许多组件和功能的挂载点，
 * 但组件本身也被设计得能够脱离app单独使用，
 * app只应该在你的应用中渲染一次。
 * @param theme 自定义的主题覆盖项
 */
export default function App({ children, theme }: AppProps) {
  const computedTheme = useCallback(() => deepMerge(defaultTheme, theme || {}), [theme]);
  useEffect(() => {
    addCSSLink('https://unpkg.com/boxicons@latest/css/boxicons.min.css');
  }, []);
  return (
    <ThemeProvider theme={computedTheme()}>
      <Global styles={globalStyles as CSSObject} />
      {children}
    </ThemeProvider>
  );
}
