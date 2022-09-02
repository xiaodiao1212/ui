/** @jsxImportSource @emotion/react */

import { Theme } from '../../styles/themes';
import { Base, Themed } from '../props';

import { useFunctionLikeValue, useCSS, useTheme } from '../../styles/css';

type GridContainerProps = Base & {
  row?: number;
  col?: number;
  rowGap?: string;
  colGap?: string;
};

const GridContainer = ({ row, col, rowGap, colGap, css, children, ...props }: GridContainerProps) => {
  const theme = useTheme() as Theme;
  const styles = useCSS({
    display: 'grid',
    gridTemplateColumns: `repeat(${col}, 1fr)`,
    gridAutoRows: '1fr',
    gridColumnGap: colGap,
    gridRowGap: rowGap,
    ...useFunctionLikeValue(theme, css),
  });

  return (
    <div css={styles} {...props}>
      {children}
    </div>
  );
};

export default GridContainer;
