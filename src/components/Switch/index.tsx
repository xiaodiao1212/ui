/** @jsxImportSource @emotion/react */

import { Theme } from '../../constants/theme';
import { useTheme, css } from '@emotion/react';
type SwitchProps = Partial<{
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => any;
  on: boolean;
  color?: string;
  className?: string;
  co?: ((theme: Theme) => React.CSSProperties) | React.CSSProperties;
}>;

const Switch = ({ on = false, onChange, color, co }: SwitchProps) => {
  const handleSwitchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e);
  };
  const theme = useTheme() as Theme;
  const styles = css({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    cursor: 'pointer',
    width: '4em',
    height: '1.6em',
    background: on ? color || theme.color.primary || '#231F9C' : theme.color.greyLight || '#F3F4F6',
    borderRadius: 100,
    position: 'relative',
    transition: 'background 0.4s ease-out',
    ...(typeof co == 'function' && co(theme)),
    '& > input': {
      display: 'none',
    },
    '& > .switch-button': {
      content: "''",
      position: 'absolute',
      left: on ? `calc(65% - 5%)` : '5%',
      width: '1.4em',
      height: '1.4em',
      borderRadius: 45,
      transition: '.4s ease-out',
      background: '#fff',
      boxShadow: '0 0 2px 0 ' + theme.color.grey || '#6b7280',
      // transform: on ? 'translateX(60%)' : '',
    },
    '&:active > .switch-button': {
      // width: '2em',
    },
  });

  return (
    <label css={styles}>
      <input checked={on} onChange={handleSwitchChange} type='checkbox' role='switch' />
      <span className='switch-button' />
    </label>
  );
};

export default Switch;
