/** @jsxImportSource @emotion/react */

import { theme, Theme } from '../../constants/theme';
import React from 'react';
import clsx from 'clsx';
import { css } from '@emotion/react';

interface ColProps {
  flexSelf?: 'start' | 'center' | 'end' | 'baseline' | 'stretch' | 'normal';
  textAlign?: 'center' | 'left' | 'right';
  flex?: number | string;
  noFlex?: boolean;
  autoMargin?: boolean;
  children?: React.ReactNode;
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
  textAlign,
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
  ...props
}: ColProps & React.ComponentPropsWithoutRef<'div'>) => {
  const styles = css({
    textAlign: textAlign ? textAlign : 'center',
    margin: ma,
    padding: ma,
    ...(my && { marginTop: my, marginBottom: my }),
    ...(mx && { marginLeft: mx, marginRight: mx }),
    ...(py && { paddingTop: py, paddingBottom: py }),
    ...(px && { paddingLeft: px, paddingRight: px }),
    marginTop: mt,
    marginBottom: mb,
    marginLeft: autoMargin ? 'auto' : ml,
    marginRight: mr,

    paddingTop: pt,
    paddingBottom: pb,
    paddingLeft: pl,
    paddingRight: pr,
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
