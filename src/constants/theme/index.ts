import { darken, lighten, fade, emphasize } from '../style';

type Theme = {
  mode: 'dark' | 'light';
  appBar: {
    height: string;
  };
  zIndex: {
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
  system: {};
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
  utils: { darken: typeof darken; lighten: typeof lighten; fade: typeof fade; emphasize: typeof emphasize };
};
const theme: Theme = {
  mode: 'light',
  color: {
    primary: '#38366D',
    secondary: '#FB7173',
    black: '#232149',
    grey: '#CDD0EE',
    red: '#e32b3a',
    accent: '#5568FE',
    greyLight: '#F6F6FF',
    white: '#FEFEFE',
  },
  utils: {
    darken,
    lighten,
    fade,
    emphasize,
  },
  zIndex: {
    appBar: 700,
    footer: 700,
    floatingWindow: 1000,
    modal: 1100,
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
