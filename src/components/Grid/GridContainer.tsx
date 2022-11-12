/** @jsxImportSource @emotion/react */

import { Theme } from '../../styles/themes';
import { ComponentBaseProps, Themed } from '../props';

import { useThemedCSS, useCSS, useTheme } from '../../styles/css';

type GridContainerProps = ComponentBaseProps & {
  row?: number;
  col?: number;
  rowGap?: string;
  colGap?: string;
};

const GridContainer = ({ row, col, rowGap, colGap, css, children, ...props }: GridContainerProps) => {
  const theme = useTheme();
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

export default GridContainer;
