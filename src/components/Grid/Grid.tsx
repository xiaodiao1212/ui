/** @jsxImportSource @emotion/react */
import { Theme } from '../../styles/themes';
import { Base, Themed } from '../props';

import { useThemedCSS, useCSS, useTheme } from '../../styles/css';

import GridContainer from './GridContainer';
type GridProps = Base & {
  row?: number;
  col?: number;
  rowGap?: string;
  colGap?: string;
};

const Grid = ({ row, col, rowGap, colGap, css, children, ...props }: GridProps) => {
  const theme = useTheme() as Theme;
  const styles = useCSS({
    display: 'grid',
    gridTemplateColumns: `repeat(${col}, 1fr)`,
    gridAutoRows: '1fr',
    gridColumnGap: colGap,
    gridRowGap: rowGap,
    ...useThemedCSS(theme, css),
  });

  return (
    <div css={styles} {...props}>
      {children}
    </div>
  );
};

Grid.Container = GridContainer;
export default Grid;
