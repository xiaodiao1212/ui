/** @jsxImportSource @emotion/react */

import { Theme } from '../../styles/themes';
import { Base } from '../props';

import { useThemedCSS, useCSS, useTheme } from '../../styles/css';

type DropdownProps = Base & {
  show?: boolean;
};

const Dropdown = ({ css, children, ...props }: DropdownProps) => {
  const theme = useTheme() as Theme;
  const styles = useCSS({
    ...useThemedCSS(theme, css),
  });

  return <div css={styles} {...props}></div>;
};

export default Dropdown;
