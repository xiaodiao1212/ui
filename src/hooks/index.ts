import { theme, Theme } from '../constants/theme'
export function useCustomTheme(customTheme: Partial<Theme>) {
  return Object.assign(theme, customTheme) as Theme
}
