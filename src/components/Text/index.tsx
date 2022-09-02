/** @jsxImportSource @emotion/react */

import { useMemo } from 'react';
import { usePadding, useMargin, useCSS, useTheme, useFunctionLikeValue } from '../../styles/css';

import { Theme } from '../../styles/themes';
import vars from '../../styles/vars';
import { Base, Margin, Padding, Themed } from '../props';
type TextProps = Base &
  Partial<{
    gradient: string;
    ellipsis: string;
    thin: boolean;
    blod: boolean;
    color: Themed<string>;
    size: number;
    maxLength: number;
    dark: boolean;
  }> &
  Margin &
  Padding;

/**
 * The Text widget lets you create a run of styled text within your application.
 * @param param0
 * @returns
 */
const Text = ({
  thin = false,
  dark = false,
  maxLength,
  size,
  blod,
  gradient,
  ellipsis = '...',
  color,
  children,
  css,
  ...props
}: TextProps) => {
  const theme = useTheme() as Theme;
  const computedColor = useMemo(() => {
    return (
      color || (dark ? (theme ? theme.color.white : vars.color.white) : theme ? theme.color.black : vars.color.black)
    );
  }, [color, theme, dark]);

  const styles = useCSS({
    fontSize: size ? size + 'rem' : 'initial',
    fontWeight: blod ? 700 : thin ? 200 : 500,
    display: 'inline',
    ...useMargin(props),
    ...usePadding(props),
    textOverflow: maxLength ? 'ellipsis' : undefined,
    whiteSpace: maxLength ? 'nowrap' : undefined,
    overflow: maxLength ? 'hidden' : undefined,
    color: gradient ? 'transparent' : computedColor,
    ...(gradient && {
      backgroundImage: gradient,
      backgroundClip: 'text',
    }),
    ...useFunctionLikeValue(theme, css),
  });

  return (
    <div css={styles} {...props}>
      {maxLength ? (children as string).substring(0, maxLength) + ellipsis : children}
    </div>
  );
};

export default Text;
