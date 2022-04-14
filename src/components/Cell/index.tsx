/** @jsxImportSource @emotion/react */

import { Theme } from '../../styles/themes';
import { ReactNode } from 'react';

import { useTheme, css } from '@emotion/react';
import { Base } from '../props';
import { useFunctionLikeValue } from '../../styles/css';
type CellProps = Base & {
  title?: ReactNode;
  caption?: ReactNode;
  value?: ReactNode;
  center?: boolean;
};

const Cell = ({ title, value, caption, co, center = true, children, onClick }: CellProps) => {
  const theme = useTheme() as Theme;

  const styles = css({
    textAlign: 'initial',
    display: 'flex',
    alignItems: center ? 'center' : 'initial',
    '& > section:nth-of-type(2n)': {
      marginLeft: 'auto',
    },
    ...useFunctionLikeValue(theme, co),
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
