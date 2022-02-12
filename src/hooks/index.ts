import { theme, Theme } from '../constants/theme';
import { deepMerge } from '../utils';
import { AppContext } from '../components/App';
import { useState, useContext } from 'react';
import useMarginCSS from './useMarginCss';
import usePaddingCSS from './usePaddingCss';
function useCustomTheme(customTheme: Theme) {
  return deepMerge(theme, customTheme) as Theme;
}

function useSystem() {
  return useContext(AppContext);
}
export { useMarginCSS, useCustomTheme, useSystem, usePaddingCSS };
