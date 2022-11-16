/** @jsxImportSource @emotion/react */

import * as React from 'react';
import { ComponentBaseProps } from '../props';
import { useCSS, useTheme, useThemedCSS } from '../../styles/css';
import { Theme } from '../../styles/themes';
import vars from '../../styles/vars';
type TagProps = ComponentBaseProps & {
  outlined?: boolean;
  color?: ((theme: Theme) => string) | string;
  radius?: number;
  hollow?: boolean;
};

/**
 * Tags appear in form fields
 *
 * ```js
 * <Tag color="#eee">greet!</Tag>
 * ```
 * @param outlined outlined style
 * @param color tag color
 * @param hollow weather the background hollow out
 * @param radius tag border radius size
 */
const Tag = ({ outlined = false, radius, color, css, children, ...props }: TagProps) => {
  const theme = useTheme();
  const getComputedColor = () =>
    useThemedCSS(theme, color) || (theme.mode == 'light' ? theme.color.black : theme.color.white);

  const styles = useCSS({
    display: 'inline-flex',
    padding: '0.2em 0.6em',
    borderRadius: radius || (theme ? theme.border[8] : vars.radius[8]),

    ...(!outlined
      ? {
          background: getComputedColor(),
          color: theme.color.white,
        }
      : {
          border: '1px solid ' + getComputedColor(),
          color: getComputedColor(),
        }),

    ...useThemedCSS(theme, css),
  });
  return (
    <span css={styles} {...props}>
      {children}
    </span>
  );
};

export default Tag;
