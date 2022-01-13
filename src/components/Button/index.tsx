/** @jsxImportSource @emotion/react */
import clsx from 'clsx';
import { css, useTheme } from '@emotion/react';
import { Theme } from '../../constants/theme';

import * as React from 'react';
import { getLuminance } from '../../constants/style';
import { isAndroid, isIos, isPC } from '../../utils';

type ButtonProps = {
  padding?: string;
  block?: boolean;
  disabled?: boolean;
  text?: boolean;
  outlined?: boolean;
  icon?: boolean;
  tile?: boolean;
  color?: string;
  accessibilityLabel?: string;
  co?: ((theme: Theme) => React.CSSProperties) | React.CSSProperties;
};

const Button = ({
  block = false,
  disabled = false,
  text = false,
  outlined = false,
  co,
  icon = false,
  tile = false,
  accessibilityLabel,
  color,
  padding,
  className,
  children,
  onClick,
  ...props
}: ButtonProps & React.ComponentProps<'button'>) => {
  const theme = useTheme() as Theme;
  const bgColor =
    disabled == false
      ? text || outlined || icon
        ? 'transparent'
        : theme
        ? theme.color.primary
        : '#5568FE'
      : theme
      ? theme.color.greyLight
      : '#56538D';
  const textColor =
    disabled == false
      ? text || outlined || icon
        ? color || theme?.color?.primary || '#5568FE'
        : getLuminance(bgColor || '') <= 0.5
        ? '#fff'
        : '#000'
      : theme
      ? theme.color.grey
      : '#38366D';
  const styles = css({
    padding: icon || text ? '' : '0.4em 1em',
    width: block ? '100%' : '',
    border: outlined ? '1px solid ' + (color || theme?.color?.primary || '#5568FE') : 'none',
    borderRadius: tile ? '0px' : '4px',
    color: textColor,
    background: bgColor,
    ...(typeof co == 'function' ? co(theme) : co),
  });

  const handleClickButton = (e: any) => {
    onClick?.(e);
  };
  return (
    <button
      onClick={handleClickButton}
      aria-label={accessibilityLabel}
      css={styles}
      className={clsx(className)}
      disabled={disabled}
      {...props}>
      {children}
    </button>
  );
};

export default Button;
