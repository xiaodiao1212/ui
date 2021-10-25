import { theme, Theme } from '../constants/theme'
import { deepMerge } from '../utils'
export function useCustomTheme(customTheme: Partial<Theme>) {
  // console.log('customTheme', deepMerge(theme, customTheme))

  return deepMerge(theme, customTheme) as Theme
}
