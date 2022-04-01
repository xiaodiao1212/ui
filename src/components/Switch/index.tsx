/** @jsxImportSource @emotion/react */

import { Theme } from '../../styles/themes';
import { useTheme, css } from '@emotion/react';
import { Base } from '../props';
import { memo, useMemo } from 'react';
import vars from '../../styles/vars';

type SwitchProps = Base & {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => any;
  on?: boolean;
  trackOffColor?: ((theme: Theme) => string) | string;
  trackOnColor?: ((theme: Theme) => string) | string;
  width?: number;
  height?: number;
};

/**
 * @description
 * A Switch is a visual toggle between two mutually exclusive states — on and off,
 * it successfully toggled when the switch thumb slides to the other side of the track upon user interaction.
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
 *   color="red"
 *  />
 * ```
 *
 * @param trackOffColor track's color with switch off.
 * @param trackOnColor track's color with switch on.
 */
const Switch = ({
  on = false,
  onChange,
  trackOffColor,
  trackOnColor,
  co,
  width = 3,
  height = 1.4,
  ...props
}: SwitchProps) => {
  const theme = useTheme() as Theme;

  /**
   * If the component is redrawn,
   * the style here will be time-consuming,
   * use useMemo to remember its value
   * and do further internal performance optimization
   */
  const styles = useMemo(() => {
    // track color width switch on
    const tcOn =
      typeof trackOnColor == 'function'
        ? trackOnColor(theme)
        : trackOnColor || theme
        ? theme.color.primary
        : vars.color.primary;

    // track color width switch off
    const tcOff =
      typeof trackOffColor == 'function'
        ? trackOffColor(theme)
        : trackOffColor || theme
        ? theme.color.primary
        : vars.color.primary;

    return css({
      //switch track css implement
      display: 'inline-flex',
      alignItems: 'center',
      cursor: 'pointer',
      width: `${width}em`,
      height: `${height}em`,
      background: on ? tcOn : tcOff,
      borderRadius: theme.border.full || '999px',
      position: 'relative',
      transition: 'background 0.25s',
      willChange: 'background',
      '& > input': {
        display: 'none',
      },

      // switch thumb css implement with selecter::after,like a <circle>
      '&::after': {
        content: "''",
        position: 'absolute',
        left: on ? `${200 / 3 - 8}%` : '8%',
        width: `${width / 3}em`,
        height: `${width / 3}em`,
        borderRadius: theme.border.full || '999px',
        background: on ? '#fff' : theme.color.greyLight,
        boxShadow: '0 0 2px 0 ' + theme.color.black,
      },

      // switch thumb's click animation
      '&:active::after': {
        width: `${width / 3 + 0.2}em`,
        transform: on ? 'translateX(-0.2em)' : '',
        willChange: 'width',
        transition: 'width .2s',
      },
      ...(co && (typeof co == 'function' ? co(theme) : co)),
    });
  }, [on, trackOffColor, trackOnColor, width, height]);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e);
  };

  return (
    <label css={styles}>
      <input checked={on} onChange={handleOnChange} type='checkbox' {...props} />
    </label>
  );
};

/**
 * The component will not re-render unless the following props change
 */
export default memo(Switch, (prevProps, nextProps) => {
  if (
    prevProps.on != nextProps.on ||
    prevProps.trackOffColor != nextProps.trackOffColor ||
    prevProps.trackOnColor != nextProps.trackOnColor ||
    prevProps.height != nextProps.height ||
    prevProps.width != nextProps.width
  )
    return false;
  return true;
});
