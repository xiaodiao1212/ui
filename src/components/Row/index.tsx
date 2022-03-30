/** @jsxImportSource @emotion/react */

import { theme, Theme } from '../../styles/themes';

import React from 'react';
import clsx from 'clsx';
import { css } from '@emotion/react';
import { useMarginCSS, usePaddingCSS } from '../../hooks';
import { Margin, Padding } from '../props';
type RowProps = {
  vertical?: boolean;
  alignItems?: 'start' | 'center' | 'end' | 'baseline' | 'stretch';
  justifyContent?: 'start' | 'center' | 'end' | 'space-around' | 'space-between';
  gap?: string;
  wrap?: boolean;
  fullHeight?: boolean;
  children?: React.ReactNode;
  className?: string;
  co?: ((theme: Theme) => React.CSSProperties) | React.CSSProperties;
} & Margin &
  Padding;

const Row = ({
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
}: RowProps & Pick<React.ComponentPropsWithoutRef<'div'>, 'onClick'>) => {
  const styles = css({
    display: 'flex',
    width: '100%',
    ...useMarginCSS(props),
    ...usePaddingCSS(props),
    justifyContent: justifyContent || '',
    flexDirection: vertical ? 'column' : 'row',
    height: fullHeight ? '100%' : 'initial',
    gap: gap,
    alignItems,
    ...(vertical ? {} : { flexWrap: wrap ? 'wrap' : 'nowrap' }),
    ...(co && (typeof co == 'function' ? co(theme) : co)),
  });
  return (
    <div css={styles} className={clsx(className)} {...props}>
      {children}
    </div>
  );
};

export default Row;
