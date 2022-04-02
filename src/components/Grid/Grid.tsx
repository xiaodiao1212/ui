/** @jsxImportSource @emotion/react */

import { css, useTheme } from '@emotion/react';
import { Theme } from '../../styles/themes';
import GridContainer from './GridContainer';
import { Base } from '../props';
type GridProps = Base & {
  row?: number;
  col?: number;
  rowGap?: string;
  colGap?: string;
};

const Grid = ({ row, col, rowGap, colGap, co, children, ...props }: GridProps) => {
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

Grid.Container = GridContainer;
export default Grid;
