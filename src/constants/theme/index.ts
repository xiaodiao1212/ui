import { darken, lighten, fade, emphasize } from '../style';
type Margin = {
  mt?: string;
  mb?: string;
  ml?: string;
  mr?: string;
  ma?: string;
  my?: string;
  mx?: string;
};

type Padding = {
  pb?: string;
  pa?: string;
  py?: string;
  px?: string;
  pt?: string;
  pl?: string;
  pr?: string;
};
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
    actionSheet: number;
    notification: number;
    drawer: number;
  };
  shadow: {
    color: string;
  };

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
    black: '#2C3E50',
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
    actionSheet: 1200,
    drawer: 1200,
  },
  common: {
    circularEdge: '9999em',
  },
  shadow: {
    color: 'rgba(0,0,0,.1)',
  },

  appBar: {
    height: '3em',
  },
};
export { theme, Theme, Padding, Margin };
