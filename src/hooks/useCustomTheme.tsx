import { theme, Theme } from '../styles/themes';
import { deepMerge } from '../utils';
export default function useCustomTheme(customTheme: Theme) {
  return deepMerge(theme, customTheme) as Theme;
}
