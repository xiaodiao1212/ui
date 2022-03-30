import { theme, Theme } from '../styles/themes';
import { deepMerge } from '../utils';
import { useState, useContext } from 'react';
import useMarginCSS from './useMarginCSS';
import usePaddingCSS from './usePaddingCSS';
function useCustomTheme(customTheme: Theme) {
  return deepMerge(theme, customTheme) as Theme;
}

export { useMarginCSS, useCustomTheme, usePaddingCSS };
