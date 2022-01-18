/** @jsxImportSource @emotion/react */

import { theme, Theme } from '../../constants/theme';
import React from 'react';
import styled from '@emotion/styled';
import clsx from 'clsx';

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
  pr,
  ...props
}: ColProps & React.ComponentPropsWithoutRef<'div'>) => {
  const Container = styled.div({
    textAlign: textAlign ? textAlign : 'center',
    margin: ma,
    padding: ma,
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
    <Container className={clsx(className)} {...props}>
      {children}
    </Container>
  );
};

export default Col;
