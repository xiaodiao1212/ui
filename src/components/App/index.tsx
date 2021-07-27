import { ThemeProvider, createUseStyles, JssProvider } from 'react-jss'
import { defaultStyle } from '../../constants/style'
import { theme, Theme } from '../../constants/theme'
type AppProps = React.ComponentPropsWithoutRef<'div'> & {
  customTheme?: Theme
}

const useDefaultStyle = createUseStyles(defaultStyle)
const App = ({ children, customTheme }: AppProps) => {
  useDefaultStyle()
  return (
    <JssProvider>
      <ThemeProvider theme={customTheme || theme}>
        <div data-testid="app">{children}</div>
      </ThemeProvider>
    </JssProvider>
  )
}

export default App
