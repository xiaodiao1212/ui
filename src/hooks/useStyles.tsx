import { createUseStyles, Styles } from "react-jss";
import { } from "jss"
import { Theme } from "../constants/theme";
const useStyles = function <T extends string = string>(
  styles?: Styles<T>,
  props?: {[key:string]:any},
  JSSOptions?
) {
  return createUseStyles((theme: Theme) => {
    return styles;
  }, JSSOptions)(props);
};

export default useStyles;
