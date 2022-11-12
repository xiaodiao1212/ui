import { Theme } from '../styles/themes';
import { Margin, Padding, Position } from '../components/props';
import { css, useTheme as useEmotionTheme } from '@emotion/react';
import vars from './vars';

export const useTheme = () => useEmotionTheme() as Theme;
export const useCSS = css;
type Color = keyof typeof vars.color;

export function useColor(color: Color, theme: Theme, defaultColor?: string) {
  return defaultColor || (theme ? theme.color[color] : vars.color[color]);
}
export function useCenter() {
  return { display: 'flex', alignItems: 'center', justifyContent: 'center' };
}

export function useHorizontalCenter() {
  return { display: 'flex', justifyContent: 'center' };
}
export function useVerticalCenter() {
  return { display: 'flex', alignItems: 'center' };
}

export function useThemedCSS(theme?: Partial<Theme>, target?: any) {
  return target && (typeof target == 'function' ? target(theme) : target);
}

export function useMargin(props: Margin) {
  const { ma, my, mt, mb, mx, ml, mr } = props;
  return { margin: ma, marginTop: mt || my, marginBottom: mb || my, marginLeft: ml || mx, marginRight: mr || mx };
}

export function usePadding(props: Padding) {
  const { pa, py, pt, pb, px, pl, pr } = props;
  return { padding: pa, paddingTop: pt || py, paddingBottom: pb || py, paddingLeft: pl || px, paddingRight: pr || px };
}

export function usePosition(props: Position) {
  const { relative, absolute, sticky, fixed } = props;
  return {
    position: relative ? 'relative' : absolute ? 'absolute' : fixed ? 'fixed' : sticky ? 'sticky' : 'static',
  };
}
