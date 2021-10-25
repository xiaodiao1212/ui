import { ThemeProvider, createUseStyles, JssProvider } from 'react-jss'
import { defaultStyle } from '../../constants/style'
import { theme, Theme } from '../../constants/theme'
type AppProps = {
  children: React.ReactNode
  customTheme?: Theme
}
const useDefaultStyle = createUseStyles(defaultStyle)

const App = ({ children, customTheme }: AppProps) => {
  useDefaultStyle()

  return <ThemeProvider theme={customTheme || theme}>{children}</ThemeProvider>
}

export default App
