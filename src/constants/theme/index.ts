import palette from "../palette";

const theme: Theme = {
  palette: palette,
  colorPrimary: palette.indigo[500],
  paddingInput: ".6em",
  borderRadius0: "0px",
  borderRadiusDefault: "4px",
  borderRadiusCircle: "50%",
  backgroundColorDefault: palette.common.white,
  colorSecondary: palette.red[500],
  colorTextInLight: palette.grey[900],
  colorTextInDark: palette.common.white,
  colorPlaceholder: palette.grey[400],
  backgroundColorInput: palette.grey[100],
  border: {
    color: "#CDCDCD",
  },
  text: {
    disabled: palette.common.grey,
    primary: palette.common.black,
    secondary: palette.common.grey,
  },
  overlay: {
    backgroundColor: palette.grey[900],
    borderColor: palette.grey[900],
  },
  zIndex: {
    appBar: 700,
    bottomNavigation: 700,
    modal: 1100,
    overlay: 1000,
    snackbar: 1400,
    drawer: 1200,
  },
};
type Theme = {
  zIndex: {
    appBar: number;
    bottomNavigation: number;
    modal: number;
    overlay: number;
    snackbar: number;
    drawer: number;
  };
  border: {
    color: string;
  };
  text: {
    primary: string;
    secondary: string;
    disabled: string;
  };
  palette: typeof palette;
  borderRadiusCircle: string;
  borderRadiusDefault: string;
  colorPrimary: string;
  borderRadius0: string;
  backgroundColorDefault: string;
  paddingInput: string;
  colorSecondary: string;
  colorTextInLight: string;
  colorTextInDark: string;
  colorPlaceholder: string;
  backgroundColorInput: string;
  overlay: {
    backgroundColor: string;
    borderColor: string;
  };
};
export { theme, Theme };
