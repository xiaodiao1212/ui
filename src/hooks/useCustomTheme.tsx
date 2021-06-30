import { theme, Theme } from "../constants/theme";
const useCustomTheme = (customTheme: Partial<Theme>) => {
  return Object.assign(theme, customTheme) as Theme;
};

export default useCustomTheme;
