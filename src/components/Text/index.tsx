/** @jsxImportSource @emotion/react */
import clsx from 'clsx';
import { css, useTheme } from '@emotion/react';
import { Theme } from '../../constants/theme';
import * as React from 'react';
type TextProps = Partial<{
  thin: boolean;
  blod: boolean;
  inline: boolean;
  color: ((theme: Theme) => string) | string;
  size: string;
  maxLength: number;
  dark: boolean;
  className: string;
  children: React.ReactNode;
  co: ((theme: Theme) => React.CSSProperties) | React.CSSProperties;
}>;

const Text = ({
  thin = false,
  dark = false,
  maxLength,
  size = '1em',
  blod,
  color,
  children,
  co,
  className,
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

    justifyContent: 'center',
    textOverflow: maxLength ? 'ellipsis' : undefined,
    whiteSpace: maxLength ? 'nowrap' : undefined,
    overflow: maxLength ? 'hidden' : undefined,
    color: computedColor,
    ...(typeof co == 'function' ? co(theme) : co),
  });
  return (
    <div css={styles} className={clsx(className)} {...props}>
      {maxLength ? (children as string).substring(0, maxLength) + '...' : children}
    </div>
  );
};

export default Text;
