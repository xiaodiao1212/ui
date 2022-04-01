/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react';
import { Theme } from '../../styles/themes';
import * as React from 'react';
import { Base } from '../props';

type ButtonProps = Base & {
  padding?: string;
  block?: boolean;
  disabled?: boolean;
  text?: boolean;
  outlined?: boolean;
  icon?: boolean;
  tile?: boolean;
  rounded?: boolean;
  radius?: string;
  color?: ((theme: Theme) => string) | string;
};

const Button = ({
  block = false,
  disabled = false,
  text = false,
  outlined = false,
  rounded = false,
  radius,
  co,
  icon = false,
  tile = false,
  color,
  padding,
  className,
  children,
  onClick,
  ...props
}: ButtonProps & React.ComponentPropsWithoutRef<'button'>) => {
  const theme = useTheme() as Theme;

  const styles = css({
    padding: padding || (icon || text ? '' : '.5em .75em'),
    width: block ? '100%' : '',
    border: outlined ? '1px solid ' + (color || theme?.color?.primary || '#5568FE') : 'none',
    borderRadius: tile ? '0px' : rounded ? '999px' : '4px',
    color: text || outlined || icon ? theme.color.primary || '#5568FE' : theme.color.white || '#fff',
    background: text || outlined || icon ? 'transparent' : theme ? theme.color.primary : '#5568FE',

    ...(co && (typeof co == 'function' ? co(theme) : co)),
  });

  const handleClickButton = (e: any) => {
    e.stopPropagation();
    onClick?.(e);
  };
  return (
    <button onClick={handleClickButton} css={styles} disabled={disabled} {...props}>
      {children}
    </button>
  );
};

export default Button;
