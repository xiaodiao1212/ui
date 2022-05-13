import { deepMerge } from '../utils';
import vars from './vars';

function useCustomTheme(customTheme: Theme) {
  return deepMerge(theme, customTheme) as Theme;
}

type Theme = {
  mode: 'dark' | 'light';
  appBar: {
    height: string;
  };
  border: {
    full: number;
  };
  zIndex: {
    dialog: number;
    floatingWindow: number;
    appBar: number;
    footer: number;
    modal: number;
    overlay: number;
    notification: number;
    drawer: number;
  };
  shadow: {
    color: string;
  };
  input: {
    padding: string;
  };
  system: Record<string, unknown>;
  color: {
    primary: string;
    secondary: string;
    black: string;
    grey: string;
    greyLight: string;
    white: string;
    red: string;
    accent: string;
  };
  common: {
    circularEdge: string;
  };
};

const theme: Theme = {
  mode: 'light',
  color: vars.color,
  border: {
    full: 999,
  },
  input: { padding: '7px 13px 7px 10px' },
  zIndex: {
    appBar: 700,
    footer: 700,
    floatingWindow: 1000,
    modal: 1100,
    dialog: 1100,
    overlay: 1000,
    notification: 1400,
    drawer: 1200,
  },
  common: {
    circularEdge: '9999em',
  },
  shadow: {
    color: 'rgba(0,0,0,.1)',
  },
  system: {},
  appBar: {
    height: '3em',
  },
};
export { theme, Theme, useCustomTheme };
