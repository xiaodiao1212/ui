/** @jsxImportSource @emotion/react */

import { theme, Theme } from '../../constants/theme';
import React from 'react';
import styled from '@emotion/styled';
import clsx from 'clsx';

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
  const Container = styled.div({
    display: 'flex',
    width: '100%',
    padding: pa,
    margin: ma,

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
    <Container className={clsx(className)} {...props}>
      {children}
    </Container>
  );
};

export default Row;
