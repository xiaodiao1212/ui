/** @jsxImportSource @emotion/react */

import { theme, Theme } from '../../styles/themes';

import React from 'react';
import clsx from 'clsx';
import { css } from '@emotion/react';
import { Margin, Padding } from '../props';

type ColProps = {
  alignSelf?: 'start' | 'center' | 'end' | 'baseline' | 'stretch' | 'normal';
  flex?: number | string;
  noFlex?: boolean;
  autoMargin?: boolean;
  children?: React.ReactNode;
  className?: string;
  left?: boolean;
  right?: boolean;
  co?: ((theme: Theme) => React.CSSProperties) | React.CSSProperties;
} & Margin &
  Padding;

const Col = ({
  children,
  noFlex,
  flex = 'auto',
  autoMargin,
  co,
  className,
  mt,
  mb,
  ml,
  mr,
  mx,
  my,
  ma,
  pb,
  pa,
  pt,
  pl,

  pr,
  py,
  px,
  alignSelf = 'center',
  left = false,
  right = false,
  ...props
}: ColProps) => {
  const styles = css({
    alignSelf: alignSelf,
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
    ...(!autoMargin && { flex: noFlex ? '' : flex }),
    ...(co && (typeof co == 'function' ? co(theme) : co)),
  });
  return (
    <div css={styles} className={clsx(className)} {...props}>
      {children}
    </div>
  );
};

export default Col;
