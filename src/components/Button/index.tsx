/** @jsxImportSource @emotion/react */
import clsx from 'clsx';
import { css, useTheme } from '@emotion/react';
import { Theme } from '../../styles/themes';

import * as React from 'react';

type ButtonProps = {
  padding?: string;
  block?: boolean;
  disabled?: boolean;
  text?: boolean;
  outlined?: boolean;
  icon?: boolean;
  tile?: boolean;
  rounded?: boolean;
  color?: ((theme: Theme) => string) | string;
  co?: ((theme: Theme) => React.CSSProperties) | React.CSSProperties;
};

const Button = ({
  block = false,
  disabled = false,
  text = false,
  outlined = false,
  rounded = false,
  co,
  icon = false,
  tile = false,
  color,
  padding,
  className,
  children,
  onClick,
  ...props
}: ButtonProps & React.ComponentProps<'button'>) => {
  const theme = useTheme() as Theme;

  const styles = css({
    padding: icon || text ? '' : '0.4em 1em',
    width: block ? '100%' : '',
    border: outlined ? '1px solid ' + (color || theme?.color?.primary || '#5568FE') : 'none',
    borderRadius: tile ? '0px' : rounded ? '999px' : '4px',
    color:
      disabled == false
        ? text || outlined || icon
          ? theme.color.primary || '#5568FE'
          : theme.color.white || '#fff'
          
        : theme
        ? theme.color.grey
        : '#6b7280',
    background:
      disabled == false
        ? text || outlined || icon
          ? 'transparent'
          : theme
          ? theme.color.primary
          : '#5568FE'
        : color || theme
        ? theme.color.primary
        : '#5568FE',
    ...(co && (typeof co == 'function' ? co(theme) : co)),
  });

  const handleClickButton = (e: any) => {
    e.stopPropagation();
    onClick?.(e);
  };
  return (
    <button onClick={handleClickButton} css={styles} className={clsx(className)} disabled={disabled} {...props}>
      {children}
    </button>
  );
};

export default Button;
