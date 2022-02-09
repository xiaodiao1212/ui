/** @jsxImportSource @emotion/react */

import clsx from 'clsx';
import { css, useTheme } from '@emotion/react';
import { Theme } from '../../constants/theme';
import * as React from 'react';

interface BottomNavigationBarProps {
  row?: number;
  col?: number;
  rowGap?: string;
  colGap?: string;
  co?: ((theme: Theme) => React.CSSProperties) | React.CSSProperties;
}

const BottomNavigationBar = ({
  row,
  col,
  rowGap,
  colGap,
  co,
  children,
  className,
  ...props
}: React.ComponentPropsWithoutRef<'footer'> & BottomNavigationBarProps) => {
  const theme = useTheme() as Theme;
  const styles = css({
    position: 'sticky',
    top: '100vh',
    ...(typeof co == 'function' ? co(theme) : co),
  });
  const computedClassNames = clsx(className);
  return (
    <footer css={styles} className={computedClassNames} {...props}>
      {children}
    </footer>
  );
};
export default BottomNavigationBar;
