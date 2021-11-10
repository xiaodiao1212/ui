import { ThemeProvider, Global, css } from '@emotion/react'
import { defaultStyle } from '../../constants/style'
import { theme, Theme } from '../../constants/theme'

type AppProps = {
  children: React.ReactNode
  customTheme?: Theme
}
const App = ({ children, customTheme }: AppProps) => {
  return (
    <ThemeProvider theme={customTheme || theme}>
      {/* <Global
        styles={css`
          .some-class {
            color: hotpink !important;
          }
        `}
      /> */}
      {children}
    </ThemeProvider>
  )
}

export default App
