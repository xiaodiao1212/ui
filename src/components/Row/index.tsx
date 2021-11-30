/** @jsxImportSource @emotion/react */

import { theme, Theme } from '../../constants/theme';
import React from 'react';
import styled from '@emotion/styled';
import clsx from 'clsx';

type RowProps = {
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
  children,
  vertical,
  wrap,
  fullHeight,
  alignItems,
  gap,
  co,
  className,
}: RowProps & React.ComponentPropsWithoutRef<'div'>) => {
  const Container = styled.div({
    display: 'flex',
    width: '100%',
    flexDirection: vertical ? 'column' : 'row',
    height: fullHeight ? '100%' : 'initial',
    gridGap: gap,
    alignItems,
    ...(vertical ? {} : { flexWrap: wrap ? 'wrap' : 'nowrap' }),
    ...(typeof co == 'function' ? co(theme) : co),
  });
  return <Container className={clsx(className)}>{children}</Container>;
};

export default Row;
