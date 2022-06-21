/** @jsxImportSource @emotion/react */

import { Theme } from '../../styles/themes';
import * as React from 'react';
import { Base } from '../props';
import { useMemo } from 'react';
import vars from '../../styles/vars';
import { useFunctionLikeValue, useCSS, useTheme } from '../../styles/css';

type DividerProps = Base &
  Partial<{
    size: number;
    vertical: boolean;
    color: string;
    dashed: boolean;
    text: React.ReactNode;
  }>;

/**
 * A divider is a thin line that groups content in lists and layouts.
 * common renders as an <hr> by default.
 *
 * example:
 * ```js
 * <Divider color="red" size={6} />
 * ```
 * main props:
 * @param size Thickness of dividing line.
 */
const Divider = ({
  text,
  size = 1,
  vertical = false,
  dashed = false,
  color,
  css,
  children,
  ...props
}: DividerProps) => {
  const theme = useTheme() as Theme;
  // Use border properties in different positions to easily and concisely simulate dividing lines
  const borderStyles = useMemo(
    () =>
      vertical
        ? {
            display: 'inline',
            borderLeft: `${size}px ${dashed ? 'dashed' : 'solid'}  ${
              color || theme ? theme.color.greyLight : vars.color.greyLight
            }`,
          }
        : {
            borderTop: `${size}px ${dashed ? 'dashed' : 'solid'}  ${
              color || theme ? theme.color.greyLight : vars.color.greyLight
            }`,
          },
    [size, dashed, color],
  );
  const styles = useCSS({
    position: 'relative',
    border: 'none',
    ...borderStyles,
    ...(children && {
      '& > *': {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
      },
    }),
    ...useFunctionLikeValue(theme, css),
  });
  return (
    <hr css={styles} {...props}>
      {children}
    </hr>
  );
};

export default Divider;
