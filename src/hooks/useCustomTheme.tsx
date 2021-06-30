import { theme, Theme } from "../constants/theme";
const useCustomTheme = (customTheme: {}) => {
  return Object.assign(customTheme, theme) as Theme;
};

export default useCustomTheme;
