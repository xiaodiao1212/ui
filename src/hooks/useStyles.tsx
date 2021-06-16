import { createUseStyles } from "react-jss";
import { Classes, Styles } from "jss";
import { Theme } from "../constants/theme";
const useStyles = function <ComponentClassNames extends string, ComponentProps>(
  styles?: Styles<ComponentClassNames,ComponentProps,Theme> | ((theme: Theme) => Styles<ComponentClassNames,ComponentProps,Theme>),
  props?: ComponentProps,
  JSSOptions?
) {
  const useButtonStyles: (
    data?: ComponentProps & { theme?: Theme }
  ) => Classes<ComponentClassNames> = createUseStyles<ComponentClassNames>(
    styles,
    JSSOptions
  );

  return useButtonStyles(props);
};

export default useStyles;
