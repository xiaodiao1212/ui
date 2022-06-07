/** @jsxImportSource @emotion/react */

import { Theme } from '../../styles/themes';
import { useTheme, css } from '@emotion/react';
import { Base } from '../props';
import { memo, ReactNode, useCallback, useMemo } from 'react';
import vars from '../../styles/vars';
import { useCenter, useFunctionLikeValue } from '../../styles/css';
import { darken } from 'polished';
import { rotate } from '../../styles/animations';

type SwitchProps = Base & {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => any;
  on?: boolean;
  trackColorOff?: ((theme: Theme) => string) | string;
  trackColorOn?: ((theme: Theme) => string) | string;
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
  thumbStyles?: ((theme: Theme) => React.CSSProperties) | React.CSSProperties;
  trackStyles?: ((theme: Theme) => React.CSSProperties) | React.CSSProperties;
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
 * @param thumbActiveOffset thumb width changing with press .
 * @param thumbStartPosition thumb start position on the track's left.
 */
const Switch = memo(
  ({
    on = false,
    onChange,
    trackColorOff,
    trackColorOn,
    trackMinWidth = '3em',
    trackHeight = '1.75em',
    thumbStyles,
    trackStyles,
    thumbWidth = '1.25em',
    thumbHeight = '1.25em',
    textOn,
    textOff,
    radius,
    className,
    loading,
    thumbActiveOffset = '0.3125em',
    thumbStartPosition = '4px',
    co,
    ...props
  }: SwitchProps) => {
    const { disabled } = props;
    const theme = useTheme() as Theme;

    const getTrackColorOff = useCallback(() => {
      return theme
        ? useFunctionLikeValue(theme, trackColorOff) || theme.color.greyLight
        : useFunctionLikeValue(theme, trackColorOff) || vars.color.greyLight;
    }, [trackColorOff]);

    const loadingStyles = useMemo(
      () => ({
        content: '""',
        borderRadius: radius || (theme ? theme.border.full : '999px'),
        borderTop: '3px solid transparent',
        borderRight: '3px solid transparent',
        animation: `${rotate()} .6s ease .25s infinite`,
        transition: 'all .25s ease',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
      }),
      [radius],
    );

    const styles = css({
      //switch track css implement
      overflow: 'hidden',
      padding: '5px',
      display: 'inline-flex',
      alignItems: 'center',
      cursor: 'pointer',
      // ensure the min-width contain the text
      minWidth: loading ? trackHeight : trackMinWidth,
      width: loading && trackHeight,
      height: trackHeight,
      opacity: disabled ? 0.1 : 1,
      background: getTrackColorOff(),
      borderRadius: radius || (theme ? theme.border.full : vars.radius.full),
      position: 'relative',
      transition: 'all .25s ease',

      // render loading component
      ...(loading && {
        '&::after': {
          border: `3px solid ${trackColorOn || (theme ? theme.color.primary : vars.color.primary)}`,
          ...loadingStyles,
          zIndex: 2,
        },
        '&::before': {
          border: `3px dashed ${trackColorOn || (theme ? theme.color.primary : vars.color.primary)}`,
          ...loadingStyles,
          zIndex: 1,
        },
      }),
      ...(!disabled && {
        '&:hover': {
          background: darken(0.05, getTrackColorOff()),
          transition: 'all .25s ease',
        },
      }),
      // hide the input apperance
      '& > input': {
        display: 'none',
      },

      // switch track's click animation
      '&:active': {
        transform: 'scale(0.85)',
        transition: 'all .25s ease',
      },

      // switch track's click thumb style
      ...(!loading && {
        '&:active > .switch-thumb': {
          width: `calc(${thumbWidth} + ${thumbActiveOffset})`,
          transform: on ? `translateX(-${thumbActiveOffset})` : '',
        },
      }),

      '& > .switch-text': {
        position: 'relative',

        padding: '5px 5px 5px 25px',
        color: on ? (theme ? theme.color.white : vars.color.white) : theme ? theme.color.black : vars.color.black,
        ...useCenter(),
        visibility: loading ? 'hidden' : 'visible',
      },

      // text in 'on' styles
      '& > .on': {
        opacity: on ? 1 : 0,
        padding: on ? '5px 25px 5px 5px' : '5px 5px 5px 25px',
        position: on ? 'relative' : 'absolute',
        transform: on ? '' : 'translate(-100%)',
      },
      // text in 'off' styles
      '& > .off': {
        transition: 'all .25s ease',
        opacity: on ? 0 : 1,
        position: on ? 'absolute' : 'relative',
        transform: on ? 'translate(100%)' : '',
      },

      '& > .switch-thumb': {
        width: thumbWidth,
        height: thumbHeight,
        borderRadius: radius || (theme ? theme.border.full : vars.radius.full),
        transition: 'all .25s ease',
        position: 'absolute',
        left: on ? `calc(calc(100% - ${thumbStartPosition}) - ${thumbWidth})` : thumbStartPosition,
        background: theme ? theme.color.white : vars.color.white,
        ...useCenter(),
        ...useFunctionLikeValue(theme, thumbStyles),
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
        visibility: loading ? 'hidden' : 'visible',
        ...useFunctionLikeValue(theme, trackStyles),
      },

      ...useFunctionLikeValue(theme, co),
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
  },
);

export default Switch;
