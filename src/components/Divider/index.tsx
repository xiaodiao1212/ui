/** @jsxImportSource @emotion/react */

import clsx from 'clsx';
import { css, useTheme } from '@emotion/react';
import { Theme } from '../../styles/themes';
import * as React from 'react';
import { Base } from '../props';

type DividerProps = Base &
  Partial<{
    size: number;
    vertical: boolean;
    color: string;
    dashed: boolean;
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
const Divider = ({ size = 1, vertical = false, dashed = false, color, co, ...props }: DividerProps) => {
  const theme = useTheme() as Theme;
  // Use border properties in different positions to easily and concisely simulate dividing lines
  const styles = css({
    border: 'none',
    ...(vertical
      ? {
          display: 'inline',
          borderLeft: `${size}px ${dashed ? 'dashed' : 'solid'}  ${
            color || (theme.mode == 'light' ? theme.color.greyLight : theme.color.grey)
          }`,
        }
      : {
          borderTop: `${size}px ${dashed ? 'dashed' : 'solid'}  ${
            color || (theme.mode == 'light' ? theme.color.greyLight : theme.color.grey)
          }`,
        }),
    ...(co && (typeof co == 'function' ? co(theme) : co)),
  });
  return <hr css={styles} {...props} />;
};

export default Divider;
