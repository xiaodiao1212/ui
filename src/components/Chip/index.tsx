/** @jsxImportSource @emotion/react */

import { Theme } from '../../styles/themes';
import { useTheme, css } from '@emotion/react';
import { Base } from '../props';
type ChipProps = Base & {
  outline?: boolean;
  color?: ((theme: Theme) => string) | string;
  r?: number;
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
const Chip = ({ outline = false, r = 4, color, co, children, ...props }: ChipProps) => {
  const theme = useTheme() as Theme;
  const getComputedColor = () =>
    (typeof color == 'function' ? color(theme) : color) ||
    (theme.mode == 'light' ? theme.color.black : theme.color.white);

  const styles = css({
    display: 'inline-flex',
    padding: '0.2em 0.6em',
    borderRadius: r + 'px',
    ...(!outline
      ? {
          background: getComputedColor(),
          color: theme.color.white,
        }
      : {
          border: '1px solid ' + getComputedColor(),
          color: getComputedColor(),
        }),
    ...(co && (typeof co == 'function' ? co(theme) : co)),
  });
  return (
    <span css={styles} {...props}>
      {children}
    </span>
  );
};

export default Chip;
