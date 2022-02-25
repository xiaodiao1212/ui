/** @jsxImportSource @emotion/react */
import clsx from 'clsx';
import { css, useTheme } from '@emotion/react';
import { Theme } from '../../constants/theme';
import * as React from 'react';

type AppBarProps = {
  center?: boolean;
  icon?: boolean;
  extra?: boolean;
  title?: React.ReactNode;
  color?: string;
  fixed?: Boolean;
  sticky?: Boolean;
  className?: string;
  co?: ((theme: Theme) => React.CSSProperties) | React.CSSProperties;
  children?: React.ReactNode;
};

const AppBar = ({ center, icon, extra, title, color, co, className, children, ...props }: AppBarProps) => {
  const theme = useTheme() as Theme;
  const containerStyles = css({
    backgroundColor: color,
    '& > ul': {
      display: 'flex',
      '&>li': {},
      '&>li:nth-child(2)': {
        textAlign: center ? 'center' : 'left',
      },
    },
    ...(co && (typeof co == 'function' ? co(theme) : co)),
  });

  return (
    <header css={containerStyles} className={clsx(className)} {...props}>
      <ul>
        {icon && <li>{icon}</li>}
        {title && <li>{title}</li>}
        {extra && <li>{extra}</li>}
      </ul>
      {children}
    </header>
  );
};

export default AppBar;
