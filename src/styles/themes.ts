import { deepMerge } from '../utils';
import vars from './vars';

type Theme = {
  mode: 'dark' | 'light';
  appBar: {
    height: string;
  };
  border: {
    8: number;
    4: number;
    12: number;
    16: number;
    0: number;
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
  button: {
    defaultPadding: string;
  };
  input: {
    padding: string;
  };
  system: Record<string, unknown>;
  color: Partial<{
    primary: string;
    secondary: string;
    black: string;
    grey: string;
    greyLight: string;
    whiteLight: string;
    white: string;
    blue: string;
    red: string;
    green: string;
    accent: string;
  }>;
  common: {
    circularEdge: string;
  };
};

const theme: Theme = {
  mode: 'light',
  color: vars.color,
  border: {
    8: 8,
    4: 4,
    12: 12,
    16: 16,
    0: 0,
    full: 999,
  },
  button: {
    defaultPadding: '.5em 1em',
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
export { theme, Theme };
