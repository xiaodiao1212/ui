import { theme, Theme as t } from '../constants/theme';
import { deepMerge } from '../utils';
import { Interpolation, Theme } from '@emotion/react';
import { useState } from 'react';
export function useCustomTheme(customTheme: Partial<t>) {
  // console.log('customTheme', deepMerge(theme, customTheme))

  return deepMerge(theme, customTheme) as t;
}

export function useCollapse(root: React.ReactNode) {
  const [expand, setExpand] = useState();
}

export function useModal(root: React.ReactNode) {
  const [modal, setModal] = useState();
}
