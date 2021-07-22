const theme: Theme = {
  mode: 'light',
  color: {
    primary: '#231F9C',
    primaryLight: '#CDCBED',
    black: '#111827',
    grey: '#6b7280',
    greyLight: '#F3F4F6',
    white: '#fff',
  },
  zIndex: {
    appBar: 700,
    bottomNavigation: 700,
    modal: 1100,
    overlay: 1000,
    snackbar: 1400,
    drawer: 1200,
  },
}
type Theme = {
  mode: 'dark' | 'light'
  zIndex: {
    appBar: number
    bottomNavigation: number
    modal: number
    overlay: number
    snackbar: number
    drawer: number
  }
  color: {
    primary: string
    primaryLight: string
    black: string
    grey: string
    greyLight: string
    white: string
  }
}

export { theme, Theme }
