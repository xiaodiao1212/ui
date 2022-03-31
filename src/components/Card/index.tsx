/** @jsxImportSource @emotion/react */

import { Theme } from '../../styles/themes';
import React from 'react';
import clsx from 'clsx';
import { useTheme, css } from '@emotion/react';
import { Base } from '../props';
type CardProps = Base &
  Partial<{
    title: React.ReactNode;
    extra: React.ReactNode;
    color: ((theme: Theme) => string) | string;
  }>;

const Card = ({ title, extra, co, className, children, onClick, color, ...props }: CardProps) => {
  const theme = useTheme() as Theme;
  const computedClassNames = clsx(className);
  const styles = css({
    textAlign: 'initial',
    display: 'flex',
    padding: '1em',
    flexDirection: 'column',
    background: color ? (typeof color == 'function' ? color?.(theme) : color) : theme.color.white,
    '& > header': {
      display: 'flex',
      '& > *': {
        marginLeft: 'auto',
      },
      '& > *:first-of-type': {
        marginLeft: '0',
      },
    },
    ...(co && (typeof co == 'function' ? co(theme) : co)),
  });

  const handleClickCard = () => {
    onClick?.();
  };

  return (
    <article css={styles} className={computedClassNames} onClick={handleClickCard} {...props}>
      {(title || extra) && (
        <header>
          <div>{title}</div>
          <div>{extra}</div>
        </header>
      )}
      <div>{children}</div>
    </article>
  );
};

export default Card;
