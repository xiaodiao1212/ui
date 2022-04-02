/** @jsxImportSource @emotion/react */

import { Theme } from '../../styles/themes';
import { useTheme, css } from '@emotion/react';
import { Base } from '../props';
import { memo, ReactNode } from 'react';
import vars from '../../styles/vars';
import Thumb from './Thumb';
import Track from './Track';
import { useCenter, useFunctionLikeValue } from '../../hooks';
import { darken } from 'polished';
type SwitchProps = Base & {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => any;
  on?: boolean;
  trackColorOff?: ((theme: Theme) => string) | string;
  trackColorOn?: ((theme: Theme) => string) | string;
  height?: string;
  trackMinWidth?: string;
  trackHeight?: string;
  thumbWidth?: string;
  thumbHeight?: string;
  thumbActiveOffset?: string;
  thumbStartPosition?: string;
  radius?: string;
  disabled?: boolean;
  loading?: boolean;
  textOn?: ReactNode;
  textOff?: ReactNode;
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
const Switch = ({
  on = false,
  onChange,
  trackColorOff,
  trackColorOn,
  trackMinWidth = '3em',
  trackHeight = '1.75em',
  thumbWidth = '1.25em',
  thumbHeight = '1.25em',
  textOn,
  textOff,
  radius,
  className,
  thumbActiveOffset = '0.3125em',
  thumbStartPosition = '4px',
  co,
  ...props
}: SwitchProps) => {
  const theme = useTheme() as Theme;

  const styles = css({
    //switch track css implement
    overflow: 'hidden',
    display: 'inline-flex',
    alignItems: 'center',
    padding: '5px',
    cursor: 'pointer',
    minWidth: trackMinWidth,
    height: trackHeight,
    background: theme
      ? useFunctionLikeValue(theme, trackColorOff) || theme.color.grey
      : useFunctionLikeValue(theme, trackColorOff) || vars.color.grey,
    borderRadius: radius || (theme ? theme.border.full : '999px'),
    position: 'relative',
    '& > input': {
      display: 'none',
    },

    // switch track's click animation
    '&:active': {
      transform: 'scale(0.85)',
      background: darken(0.05, theme ? theme.color.grey : vars.color.grey),
      transition: 'all .25s ease',
    },

    '&:active > .switch-thumb': {
      width: `calc(${thumbWidth} + ${thumbActiveOffset})`,
      transform: on ? `translateX(-${thumbActiveOffset})` : '',
    },

    '& > .switch-text': {
      position: 'relative',
      fontSize: '.7em',
      padding: '5px 5px 5px 25px',
      color: on ? (theme ? theme.color.white : vars.color.white) : theme ? theme.color.black : vars.color.black,
      ...useCenter(),
    },

    '& > .on': {
      opacity: on ? 1 : 0,
      padding: on ? '5px 25px 5px 5px' : '5px 5px 5px 25px',
      position: on ? 'relative' : 'absolute',
      transform: on ? '' : 'translate(-100%)',
    },

    '& > .off': {
      transition: 'all .25s ease',
      opacity: on ? 0 : 1,
      position: on ? 'absolute' : 'relative',
      transform: on ? 'translate(100%)' : '',
    },

    '& > .switch-thumb': {
      width: thumbWidth,
      height: thumbHeight,
      borderRadius: radius || (theme ? theme.border.full : '999px'),
      transition: 'all .25s ease',
      position: 'absolute',
      left: on ? `calc(calc(100% - ${thumbStartPosition}) - ${thumbWidth})` : thumbStartPosition,
      background: theme ? theme.color.white : vars.color.white,
      ...useCenter(),
    },

    '& .switch-track': {
      width: '100%',
      height: 'auto',
      position: 'absolute',
      background: trackColorOn || (theme ? theme.color.primary : vars.color.primary),
      transform: 'scale(1)',
      left: on ? '0%' : '-100%',
      transition: `all ${vars.transition.time} ease`,
      borderRadius: radius || (theme ? theme.border.full : '999px'),
      paddingBottom: '100%',
    },

    ...(co && useFunctionLikeValue(theme, co)),
  });

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e);
  };

  return (
    <label css={styles} className={className}>
      <input checked={on} onChange={handleOnChange} type='checkbox' {...props} />
      <div className='switch-track' />
      <div className='switch-text on'>{textOn}</div>
      <div className='switch-text off'>{textOff}</div>
      <div className='switch-thumb' />
    </label>
  );
};

Switch.Thumb = Thumb;
Switch.Track = Track;

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
export default memo(Switch);
/**
 * The component will not re-render unless the following props change
 */
