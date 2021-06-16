import { createUseStyles } from "react-jss";
import { Theme } from "../constants/theme";

const useGlobalStyles = () => {
  const styles = createUseStyles((theme: Theme) => {
    return theme.default;
  })();
  return styles
};

export default useGlobalStyles;
