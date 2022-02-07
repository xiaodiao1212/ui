/** @jsxImportSource @emotion/react */
import clsx from 'clsx';
import { css, useTheme } from '@emotion/react';
import { Theme } from '../../constants/theme';
import * as React from 'react';
type GridContainerProps = {
  row?: number;
  col?: number;
  rowGap?: string;
  colGap?: string;
  children?: React.ReactNode;
  className?: string;
  co?: ((theme: Theme) => React.CSSProperties) | React.CSSProperties;
};

const GridContainer = ({ row, col, rowGap, colGap, co, children, className, ...restProps }: GridContainerProps) => {
  const theme = useTheme() as Theme;
  const styles = css({
    display: 'grid',
    gridTemplateColumns: `repeat(${col}, 1fr)`,
    gridAutoRows: '1fr',
    gridColumnGap: colGap,
    gridRowGap: rowGap,
    ...(typeof co == 'function' ? co(theme) : co),
  });
  const computedClassNames = clsx(className);
  return (
    <div css={styles} className={computedClassNames} {...restProps}>
      {children}
    </div>
  );
};

export default GridContainer;
