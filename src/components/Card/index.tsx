/** @jsxImportSource @emotion/react */

import { Theme } from '../../constants/theme';
import React from 'react';
import clsx from 'clsx';
import { useTheme, css } from '@emotion/react';

type CardProps = Partial<{
  title: React.ReactNode;
  extra: React.ReactNode;
  className: string;
  children: React.ReactNode;
  color: ((theme: Theme) => string) | string;
  onClick: () => any;
  co: ((theme: Theme) => React.CSSProperties) | React.CSSProperties;
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
      '& > *:first-child': {
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
