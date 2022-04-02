/** @jsxImportSource @emotion/react */

import { Theme } from '../../styles/themes';
import { useTheme, css } from '@emotion/react';
import { Base } from '../props';
import { memo, ReactNode } from 'react';
import vars from '../../styles/vars';

type SwitchProps = Base & {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => any;
  on?: boolean;
  trackColorOff?: ((theme: Theme) => string) | string;
  trackColorOn?: ((theme: Theme) => string) | string;
  width?: number;
  height?: number;
  trackWidth?: number;
  trackHeight?: number;
  thumbWidth?: number;
  thumbHeight?: number;
  radius?: number;
  disabled?: boolean;
  loading?: boolean;
  textOn?: ReactNode;
  textOff?: ReactNode;
};
const computedBackground = (theme: Theme, c?: ((theme: Theme) => string) | string) => {
  return typeof c == 'function' ? c(theme) : c || theme ? theme.color.primary : vars.color.primary;
};
const Track = ({
  on = false,
  onChange,
  trackColorOff,
  trackColorOn,
  trackWidth,
  trackHeight,
  thumbWidth,
  thumbHeight,
  textOn,
  textOff,
  radius,
  co,
  width = 3,
  height = 1.4,
  ...props
}: SwitchProps) => {
  const theme = useTheme() as Theme;

  const styles = css({
    //switch track css implement
    display: 'inline-flex',
    alignItems: 'center',
    cursor: 'pointer',
    width: `${width}em`,
    height: `${height}em`,
    background: on ? computedBackground(theme, trackColorOn) : computedBackground(theme, trackColorOff),
    borderRadius: radius || (theme ? theme.border.full : '999px'),
    position: 'relative',
    transition: `background ${vars.transition.time}`,
    '& > input': {
      display: 'none',
    },

    // switch track's click animation
    '&:active': { transition: 'all .2s', transform: 'scale(0.9)' },

    // switch thumb css implement with selecter::after,like a <circle>
    '&::after': {
      content: "''",
      position: 'absolute',
      left: on ? `${200 / 3 - 8}%` : '8%',
      width: `${width / 3}em`,
      height: `${width / 3}em`,
      transition: 'all .2s',
      borderRadius: theme.border.full || '999px',
      background: on ? '#fff' : theme.color.greyLight,
      boxShadow: '0 0 2px 0 ' + theme.color.black,
    },

    // switch thumb's click animation
    '&:active::after': {
      width: `${width / 3 + 0.2}em`,
      transform: on ? 'translateX(-0.2em)' : '',
    },

    ...(co && (typeof co == 'function' ? co(theme) : co)),
  });

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e);
  };

  return (
    <label css={styles}>
      {(textOn || textOff) && <div>{on ? textOn : textOff}</div>}
      <input checked={on} onChange={handleOnChange} type='checkbox' {...props} />
    </label>
  );
};

/**
 * @description
 * A Switch is a visual toggle between two mutually exclusive states — on and off,
 * usually has track and thumb, it successfully toggled
 * when the switch thumb slides to the other side of the track upon user interaction.
 * this component behaves the same on ios and android,
 * especially on mobile instead of a checkbox.
 *
 * The following points can be referred to:
 *
 * 1.Avoid adding labels to describe the values of a switch.
 *
 * 2.Use switches in table or list rows only.
 *
 * 3.Consider using switches to manage the availability of related interface elements.
 *
 * @example
 * ```js
 * const [on, setOn] = useState(false);
 *
 * <Switch
 *   on={on}
 *   onChange={() => setOn(v => !v)}
 *   trackColorOn="red"
 *  />
 * ```
 *
 * @param trackColorOff track's color with switch off.
 * @param trackColorOn track's color with switch on.
 */
export default memo(Track);
/**
 * The component will not re-render unless the following props change
 */
