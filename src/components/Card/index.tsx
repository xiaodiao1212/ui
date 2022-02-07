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
  onClick: () => any;
  co: ((theme: Theme) => React.CSSProperties) | React.CSSProperties;
}>;

const Card = ({ title, extra, co, className, children, onClick, ...props }: CardProps) => {
  const theme = useTheme() as Theme;
  const computedClassNames = clsx(className);
  const styles = css({
    display: 'flex',
    flexDirection: 'column',
    background: theme.color.white,
    '& > header': {
      display: 'flex',
      '& > *': {
        marginLeft: 'auto',
      },
      '& > *:first-child': {
        marginLeft: '0',
      },
    },
    ...(typeof co == 'function' ? co(theme) : co),
  });

  const handleClickCard = () => {
    onClick?.();
  };

  return (
    <article css={styles} className={computedClassNames} onClick={handleClickCard} {...props}>
      <header>
        <div>{title}</div>
        <div>{extra}</div>
      </header>
      {children}
    </article>
  );
};

export default Card;
