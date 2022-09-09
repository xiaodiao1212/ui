/** @jsxImportSource @emotion/react */

import { useMargin, usePadding, useCSS, useTheme, useThemedCSS } from '../../styles/css';
import { Theme } from '../../styles/themes';
import { Base, Margin, Padding } from '../props';

type RowProps = Margin &
  Padding &
  Base & {
    vertical?: boolean;
    align?: 'start' | 'center' | 'end' | 'baseline' | 'stretch';
    justify?: 'start' | 'center' | 'end' | 'space-around' | 'space-between';
    gap?: string;
    wrap?: boolean;
    fullHeight?: boolean;
  };

const Row = ({ children, vertical, wrap, fullHeight, align, justify, gap, css, ...props }: RowProps) => {
  const theme = useTheme() as Theme;
  const styles = useCSS({
    display: 'flex',
    width: '100%',
    ...useMargin(props),
    ...usePadding(props),
    justifyContent: justify || '',
    flexDirection: vertical ? 'column' : 'row',
    height: fullHeight ? '100%' : 'initial',
    gap: gap,
    alignItems: align || '',
    ...(vertical ? {} : { flexWrap: wrap ? 'wrap' : 'nowrap' }),
    ...useThemedCSS(theme, css),
  });
  return (
    <div css={styles} {...props}>
      {children}
    </div>
  );
};

export default Row;
