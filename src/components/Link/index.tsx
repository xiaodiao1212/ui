/** @jsxImportSource @emotion/react */
import clsx from 'clsx';
import { css, useTheme } from '@emotion/react';
import { Theme } from '../../constants/theme';

import * as React from 'react';

type LinkProps = {
  indicatorColor?: string;
  indicatorWidth?: string;
  indicatorHeight?: string;
  href?: string;
  color?: string;
  co?: ((theme: Theme) => React.CSSProperties) | React.CSSProperties;
};

const Link = ({
  disabled,
  indicatorColor = '#fff',
  indicatorWidth,
  href,
  indicatorHeight,
  co,
  onClick,
  className,
  children,
  ...props
}: LinkProps & React.ComponentProps<'button'>) => {
  const theme = useTheme() as Theme;

  const styles = css({
    borderBottomWidth: indicatorWidth,
    borderBottom: `${indicatorHeight || '1px'} solid  ${indicatorColor || theme?.color?.primary || '#5568FE'}`,
    ...(typeof co == 'function' ? co(theme) : co),
  });

  const handleClickLink = (e: any) => {
    onClick?.(e);
    href && (location.href = href);
  };
  return (
    <button onClick={handleClickLink} css={styles} className={clsx(className)} disabled={disabled} {...props}>
      {children}
    </button>
  );
};

export default Link;
