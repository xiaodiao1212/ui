import { theme, Theme } from '../constants/theme';
import { deepMerge } from '../utils';
import { AppContext } from '../components/App';
import { useState, useContext } from 'react';
import useMarginCSS from './useMarginCSS';
import usePaddingCSS from './usePaddingCSS';
function useCustomTheme(customTheme: Theme) {
  return deepMerge(theme, customTheme) as Theme;
}

function useSystem() {
  return useContext(AppContext);
}
export { useMarginCSS, useCustomTheme, useSystem, usePaddingCSS };
