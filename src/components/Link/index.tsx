/** @jsxImportSource @emotion/react */

import { css, useTheme } from '@emotion/react';
import { Theme } from '../../styles/themes';

import * as React from 'react';
import { Base } from '../props';

type LinkProps = Base & {
  indicatorColor?: string;
  indicatorWidth?: string;
  indicatorHeight?: string;
  color?: string;
};

const Link = ({
  indicatorColor = '#fff',
  indicatorWidth,
  color,
  indicatorHeight,
  co,
  onClick,
  children,
  ...props
}: LinkProps & React.ComponentPropsWithoutRef<'a'>) => {
  const theme = useTheme() as Theme;

  const styles = css({
    color,
    borderBottomWidth: indicatorWidth,
    borderBottom: `${indicatorHeight || '1px'} solid  ${indicatorColor || theme?.color?.primary || '#5568FE'}`,
    ...(typeof co == 'function' ? co(theme) : co),
  });

  return (
    <a css={styles} {...props}>
      {children}
    </a>
  );
};

export default Link;
