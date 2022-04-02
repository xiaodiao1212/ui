/** @jsxImportSource @emotion/react */

import { css, useTheme } from '@emotion/react';
import { Theme } from '../../styles/themes';

import * as React from 'react';
import { Base } from '../props';

type LinkProps = Base & {
  indicatorColor?: string;
  indicatorWidth?: string;
  indicatorHeight?: string;
  href?: string;
  color?: string;
};

const Link = ({
  indicatorColor = '#fff',
  indicatorWidth,
  href,
  color,
  indicatorHeight,
  co,
  onClick,
  children,
  ...props
}: LinkProps & React.ComponentProps<'button'>) => {
  const theme = useTheme() as Theme;

  const styles = css({
    color,
    borderBottomWidth: indicatorWidth,
    borderBottom: `${indicatorHeight || '1px'} solid  ${indicatorColor || theme?.color?.primary || '#5568FE'}`,
    ...(typeof co == 'function' ? co(theme) : co),
  });

  const handleClickLink = (e: any) => {
    onClick?.(e);
    href && (location.href = href);
  };
  return (
    <button onClick={handleClickLink} css={styles} {...props}>
      {children}
    </button>
  );
};

export default Link;
