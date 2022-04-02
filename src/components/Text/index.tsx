/** @jsxImportSource @emotion/react */

import { css, useTheme } from '@emotion/react';
import { Theme } from '../../styles/themes';
import { Base } from '../props';
type TextProps = Base &
  Partial<{
    left: boolean;
    center: boolean;
    right: boolean;
    thin: boolean;
    blod: boolean;
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
  maxLength,
  size,
  blod,
  color,
  children,
  co,
  ...props
}: TextProps) => {
  const theme = useTheme() as Theme;
  const computedColor =
    typeof color == 'function'
      ? (color as (theme: Theme) => string)(theme)
      : color ||
        ((dark
          ? theme
            ? theme.color.white
            : '#fff'
          : theme
          ? theme.mode == 'light'
            ? theme.color.black
            : theme.color.white
          : '#111827') as string);
  const styles = css({
    fontSize: size as string,
    fontWeight: blod ? 700 : thin ? 200 : 500,
    display: 'inline',
    alignItems: 'center',
    textAlign: ((center && 'center') || (left && 'left') || (right && 'right')) as any,
    justifyContent: 'center',
    textOverflow: maxLength ? 'ellipsis' : undefined,
    whiteSpace: maxLength ? 'nowrap' : undefined,
    overflow: maxLength ? 'hidden' : undefined,
    color: computedColor,
    ...(co && (typeof co == 'function' ? co(theme) : co)),
  });
  return (
    <div css={styles} {...props}>
      {maxLength ? (children as string).substring(0, maxLength) + '...' : children}
    </div>
  );
};

export default Text;
