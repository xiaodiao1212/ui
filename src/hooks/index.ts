import { theme, Theme as t } from '../constants/theme';
import { deepMerge } from '../utils';
import { Interpolation, Theme } from '@emotion/react';
export function useCustomTheme(customTheme: Partial<t>) {
  // console.log('customTheme', deepMerge(theme, customTheme))

  return deepMerge(theme, customTheme) as t;
}

function useStyles<T extends { [key: string]: Interpolation<Theme> }>(arg: T): T {
  return arg;
}
export { useStyles };
