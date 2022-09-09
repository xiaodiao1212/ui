/** @jsxImportSource @emotion/react */

import { Theme } from '../../styles/themes';
import { ReactNode } from 'react';
import { Base } from '../props';
import { useThemedCSS, useTheme, useCSS } from '../../styles/css';
type CellProps = Base & {
  title?: ReactNode;
  caption?: ReactNode;
  value?: ReactNode;
  centered?: boolean;
};

const Cell = ({ title, value, caption, css, centered = true, children, onClick }: CellProps) => {
  const theme = useTheme() as Theme;

  const styles = useCSS({
    textAlign: 'initial',
    display: 'flex',
    width: '100%',
    alignItems: centered ? 'center' : 'initial',
    '& > section:nth-of-type(2n)': {
      marginLeft: 'auto',
    },
    ...useThemedCSS(theme, css),
  });

  const handleClickCell = () => {
    onClick && onClick();
  };

  return (
    <article css={styles} onClick={handleClickCell}>
      <section>
        {title}
        <div>{caption}</div>
      </section>
      <section>{value}</section>
    </article>
  );
};

export default Cell;
