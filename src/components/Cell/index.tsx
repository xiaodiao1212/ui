/** @jsxImportSource @emotion/react */

import { Theme } from '../../styles/themes';
import React from 'react';

import { useTheme, css } from '@emotion/react';
import { Base } from '../props';
type CellProps = Base &
  Partial<{
    key: React.ReactNode;
    keyStyles: ((theme: Theme) => React.CSSProperties) | React.CSSProperties;
    value: React.ReactNode;
    valueStyles: ((theme: Theme) => React.CSSProperties) | React.CSSProperties;
  }>;

const Cell = ({ key, value, co, children, onClick, keyStyles, valueStyles, ...props }: CellProps) => {
  const theme = useTheme() as Theme;

  const styles = css({
    textAlign: 'initial',
    display: 'flex',
    alignItems: 'center',
    '& > .key': {
      ...(keyStyles && (typeof keyStyles == 'function' ? keyStyles?.(theme) : keyStyles)),
    },
    '& > .value': {
      marginLeft: '0',
      ...(valueStyles && (typeof valueStyles == 'function' ? valueStyles?.(theme) : valueStyles)),
    },
    ...(co && (typeof co == 'function' ? co(theme) : co)),
  });

  const handleClickCell = () => {
    onClick?.();
  };

  return (
    <article css={styles} onClick={handleClickCell} {...props}>
      <section className='key'>{key}</section>
      <section className='value'>{value}</section>
    </article>
  );
};

export default Cell;
