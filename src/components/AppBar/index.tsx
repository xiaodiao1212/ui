/** @jsxImportSource @emotion/react */

import { css, useTheme } from '@emotion/react';
import { Theme } from '../../styles/themes';
import * as React from 'react';
import { Base } from '../props';

type AppBarProps = Base & {
  center?: boolean;
  icon?: boolean;
  extra?: boolean;
  title?: React.ReactNode;
  color?: string;
  fixed?: boolean;
  sticky?: boolean;
  children?: React.ReactNode;
};

const AppBar = ({ center, icon, extra, title, color, co, children, ...props }: AppBarProps) => {
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
    ...(co && typeof co == 'function' ? co(theme) : co),
  });

  return (
    <header css={containerStyles} {...props}>
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
