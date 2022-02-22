/** @jsxImportSource @emotion/react */

import { Theme } from '../../constants/theme';
import React from 'react';
import clsx from 'clsx';
import { useTheme, css } from '@emotion/react';

type ChipProps = {
  outline?: boolean;
  color?: ((theme: Theme) => string) | string;
  children?: React.ReactNode;
  className?: string;
  r?: number;
  co?: ((theme: Theme) => React.CSSProperties) | React.CSSProperties;
};

/**
 * Chips appear in form fields – mainly in search bars –
 * and are used as an indicator for filtered content.
 * They reflect the input a user types in.
 * Chips can be manipulated by editing the text or deleted by clicking on the x.
 *
 * ```js
 *
 * ```
 * @param outline (Optional) set style with outline
 * @param color (Optional) the css property `color`
 * @param r (Optional) the css property `borderRadius`
 */
const Chip = ({ outline = false, r = 4, color, co, children, className, ...props }: ChipProps) => {
  const theme = useTheme() as Theme;
  const getComputedColor = (color?: ((theme: Theme) => string) | string) =>
    (typeof color == 'function' ? color(theme) : color) ||
    (theme.mode == 'light' ? theme.color.black : theme.color.white);
  const computedClassNames = clsx(className);
  const styles = css({
    display: 'inline-flex',
    padding: '0.2em 0.6em',
    borderRadius: r + 'px',
    ...(!outline
      ? {
          backgroundColor: getComputedColor(color),
          color: theme.color.white,
        }
      : {
          border: '1px solid ' + getComputedColor(color),
          color: getComputedColor(color),
        }),
    ...(co && (typeof co == 'function' ? co(theme) : co)),
  });
  return (
    <span css={styles} className={computedClassNames} {...props}>
      {children}
    </span>
  );
};

export default Chip;
