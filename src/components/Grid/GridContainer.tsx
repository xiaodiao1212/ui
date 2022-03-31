/** @jsxImportSource @emotion/react */

import { css, useTheme } from '@emotion/react';
import { Theme } from '../../styles/themes';
import { Base } from '../props';

type GridContainerProps = Base & {
  row?: number;
  col?: number;
  rowGap?: string;
  colGap?: string;
};

const GridContainer = ({ row, col, rowGap, colGap, co, children, ...props }: GridContainerProps) => {
  const theme = useTheme() as Theme;
  const styles = css({
    display: 'grid',
    gridTemplateColumns: `repeat(${col}, 1fr)`,
    gridAutoRows: '1fr',
    gridColumnGap: colGap,
    gridRowGap: rowGap,
    ...(co && (typeof co == 'function' ? co(theme) : co)),
  });

  return (
    <div css={styles} {...props}>
      {children}
    </div>
  );
};

export default GridContainer;
