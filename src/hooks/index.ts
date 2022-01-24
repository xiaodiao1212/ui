import { theme, Theme } from '../constants/theme';
import { deepMerge } from '../utils';
import { AppContext } from '../components/App';
import { useState, useContext } from 'react';
import { useToast } from './useToast';
function useCustomTheme(customTheme: Theme) {
  return deepMerge(theme, customTheme) as Theme;
}

function useCollapse(root: React.ReactNode) {
  const [expand, setExpand] = useState();
}

function useModal(root: React.ReactNode) {
  const [modal, setModal] = useState();
}

function useSystem() {
  return useContext(AppContext);
}
export { useToast, useCustomTheme, useSystem, useModal, useCollapse };
