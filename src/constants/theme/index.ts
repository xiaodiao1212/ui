import { darken, lighten, fade, emphasize } from '../style'
const theme: Theme = {
  mode: 'light',
  color: {
    primary: '#231F9C',
    black: '#111827',
    grey: '#6b7280',
    greyLight: '#F3F4F6',
    white: '#fff',
    darken,
    lighten,
    fade,
    emphasize,
  },
  zIndex: {
    appBar: 700,
    bottomNavigation: 700,
    floatingWindow: 1000,
    modal: 1100,
    overlay: 1000,
    snackbar: 1400,
    drawer: 1200,
  },
  bottomNavigation: {
    height: '3em',
  },
  appBar: {
    height: '3em',
  },
}
type Theme = {
  mode: 'dark' | 'light'
  bottomNavigation: {
    height: string
  }
  appBar: {
    height: string
  }
  zIndex: {
    floatingWindow: number
    appBar: number
    bottomNavigation: number
    modal: number
    overlay: number
    snackbar: number
    drawer: number
  }
  color: Partial<{
    primary: string
    black: string
    grey: string
    greyLight: string
    white: string
    darken: typeof darken
    lighten: typeof lighten
    fade: typeof fade
    emphasize: typeof emphasize
  }>
}

export { theme, Theme }
