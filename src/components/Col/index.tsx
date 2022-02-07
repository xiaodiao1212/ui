/** @jsxImportSource @emotion/react */

import { theme, Theme } from '../../constants/theme';
import React from 'react';
import clsx from 'clsx';
import { css } from '@emotion/react';

interface ColProps {
  flexSelf?: 'start' | 'center' | 'end' | 'baseline' | 'stretch' | 'normal';
  flex?: number | string;
  noFlex?: boolean;
  autoMargin?: boolean;
  children?: React.ReactNode;
  className?: string;
  left?: boolean;
  right?: boolean;
  mt?: string;
  mb?: string;
  ml?: string;
  mr?: string;
  pb?: string;
  pa?: string;
  ma?: string;
  pt?: string;
  pl?: string;
  pr?: string;
  py?: string;
  px?: string;
  my?: string;
  mx?: string;
  co?: ((theme: Theme) => React.CSSProperties) | React.CSSProperties;
}

const Col = ({
  children,
  noFlex,
  flex,
  autoMargin,
  co,
  className,
  mt,
  mb,
  ml,
  mr,
  pb,
  pa,
  ma,
  pt,
  pl,
  mx,
  my,
  pr,
  py,
  px,
  left = false,
  right = false,
  ...props
}: ColProps) => {
  const styles = css({
    textAlign: (left && 'left') || (right && 'right') || 'center',
    margin: ma,
    padding: ma,
    marginTop: mt || my,
    marginBottom: mb || my,
    marginLeft: autoMargin ? 'auto' : ml || mx,
    marginRight: mr || mx,
    paddingTop: pt || py,
    paddingBottom: pb || py,
    paddingLeft: pl || px,
    paddingRight: pr || px,
    ...(!autoMargin && { flex: noFlex ? '' : flex || '1' }),
    ...(typeof co == 'function' ? co(theme) : co),
  });
  return (
    <div css={styles} className={clsx(className)} {...props}>
      {children}
    </div>
  );
};

export default Col;
