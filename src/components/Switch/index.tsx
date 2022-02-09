/** @jsxImportSource @emotion/react */

import { Theme } from '../../constants/theme';
import { useTheme, css } from '@emotion/react';
type SwitchProps = {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => any;
  on?: boolean;
  color?: ((theme: Theme) => string) | string;
  width?: number;
  height?: number;
  className?: string;
  co?: ((theme: Theme) => React.CSSProperties) | React.CSSProperties;
};

const Switch = ({ on = false, onChange, color, co, width = 3, height = 1.4 }: SwitchProps) => {
  const handleSwitchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e);
  };
  const theme = useTheme() as Theme;
  const styles = css({
    display: 'inline-flex',
    alignItems: 'center',
    cursor: 'pointer',
    width: `${width}em`,
    height: `${height}em`,
    background: on ? (typeof color == 'function' ? color(theme) : color || theme.color.primary) : theme.color.grey,
    borderRadius: 100,
    position: 'relative',
    transition: 'background 0.3s',
    ...(typeof co == 'function' ? co(theme) : co),
    '& > input': {
      display: 'none',
    },
    '&::after': {
      content: "''",
      position: 'absolute',
      left: on ? `${200 / 3 - 8}%` : '8%',
      width: `${width / 3}em`,
      height: `${width / 3}em`,
      borderRadius: 100,
      transition: '.3s',
      background: on ? '#fff' : theme.color.greyLight,
      boxShadow: '0 0 2px 0 ' + theme.color.black,
    },
    '&:active::after': {
      width: `${width / 3 + 0.2}em`,
      transform: on ? 'translateX(-0.2em)' : '',
      transition: '0.2s',
    },
  });

  return (
    <label css={styles}>
      <input checked={on} onChange={handleSwitchChange} type='checkbox' />
    </label>
  );
};

export default Switch;
