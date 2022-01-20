import { theme, Theme } from '../constants/theme';
import { deepMerge } from '../utils';

import { useState } from 'react';
export function useCustomTheme(customTheme: Theme) {
  // console.log('customTheme', deepMerge(theme, customTheme))

  return deepMerge(theme, customTheme) as Theme;
}

export function useCollapse(root: React.ReactNode) {
  const [expand, setExpand] = useState();
}

export function useModal(root: React.ReactNode) {
  const [modal, setModal] = useState();
}
