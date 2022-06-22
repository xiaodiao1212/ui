/** @jsxImportSource @emotion/react */

import { useCSS, useTheme, useFunctionLikeValue } from '../../styles/css';
import { Theme } from '../../styles/themes';
import vars from '../../styles/vars';
import { Base } from '../props';
type TextProps = Base &
  Partial<{
    left: boolean;
    center: boolean;
    right: boolean;
    thin: boolean;
    blod: boolean;
    primary: boolean;
    inline: boolean;
    color: ((theme: Theme) => string) | string;
    size: string;
    maxLength: number;
    dark: boolean;
  }>;

/**
 * The Text widget lets you create a run of styled text within your application.
 * @param param0
 * @returns
 */
const Text = ({
  left = false,
  center = false,
  right = false,
  thin = false,
  dark = false,
  primary = false,
  maxLength,
  size,
  blod,
  color,
  children,
  css,
  ...props
}: TextProps) => {
  const theme = useTheme() as Theme;
  const computedColor =
    useFunctionLikeValue(theme, color) ||
    (primary
      ? theme
        ? theme.color.primary
        : vars.color.primary
      : dark
      ? theme
        ? theme.color.white
        : vars.color.white
      : theme
      ? theme.mode == 'light'
        ? theme.color.black
        : theme.color.white
      : vars.color.white);
  const styles = useCSS({
    fontSize: size,
    fontWeight: blod ? 700 : thin ? 200 : 500,
    display: 'inline',
    alignItems: 'center',
    textAlign: ((center && 'center') || (left && 'left') || (right && 'right')) as any,
    justifyContent: 'center',
    textOverflow: maxLength ? 'ellipsis' : undefined,
    whiteSpace: maxLength ? 'nowrap' : undefined,
    overflow: maxLength ? 'hidden' : undefined,
    color: computedColor,
    ...useFunctionLikeValue(theme, css),
  });
  return (
    <div css={styles} {...props}>
      {maxLength ? (children as string).substring(0, maxLength) + '...' : children}
    </div>
  );
};

export default Text;
