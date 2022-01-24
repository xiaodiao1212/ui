/** @jsxImportSource @emotion/react */

import { theme, Theme } from '../../constants/theme';
import React from 'react';
import clsx from 'clsx';
import { css } from '@emotion/react';

type RowProps = {
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
  vertical?: boolean;
  alignItems?: 'start' | 'center' | 'end' | 'baseline' | 'stretch';
  justifyContent?: 'start' | 'center' | 'end' | 'space-around' | 'space-between';
  gap?: string;
  wrap?: boolean;
  fullHeight?: boolean;
  children: React.ReactNode;
  co?: ((theme: Theme) => React.CSSProperties) | React.CSSProperties;
};

const Row = ({
  mt,
  mb,
  ml,
  mr,
  pb,
  pa,
  ma,
  pt,
  pl,
  pr,
  py,
  px,
  my,
  mx,
  children,
  vertical,
  wrap,
  fullHeight,
  alignItems,
  justifyContent,
  gap,
  co,
  className,
  ...props
}: RowProps & React.ComponentPropsWithoutRef<'div'>) => {
  const styles = css({
    display: 'flex',
    width: '100%',
    padding: pa,
    margin: ma,
    ...(my && { marginTop: my, marginBottom: my }),
    ...(mx && { marginLeft: mx, marginRight: mx }),
    ...(py && { paddingTop: py, paddingBottom: py }),
    ...(px && { paddingLeft: px, paddingRight: px }),
    marginTop: mt,
    marginBottom: mb,
    marginLeft: ml,
    marginRight: mr,
    paddingTop: pt,
    paddingBottom: pb,
    paddingLeft: pl,
    paddingRight: pr,
    justifyContent: justifyContent || '',
    flexDirection: vertical ? 'column' : 'row',
    height: fullHeight ? '100%' : 'initial',
    gridGap: gap,
    alignItems,
    ...(vertical ? {} : { flexWrap: wrap ? 'wrap' : 'nowrap' }),
    ...(typeof co == 'function' ? co(theme) : co),
  });
  return (
    <div css={styles} className={clsx(className)} {...props}>
      {children}
    </div>
  );
};

export default Row;
