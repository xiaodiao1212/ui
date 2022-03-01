/** @jsxImportSource @emotion/react */
import clsx from 'clsx';
import { css, useTheme } from '@emotion/react';
import { Theme } from '../../constants/theme';
import * as React from 'react';
import ReactDOM from 'react-dom';
import { useEffect, useState, useCallback, createContext, ReactNode } from 'react';
import Card from '../Card';
import Text from '../Text';
import Container from '../Container';

type ToastProps = Partial<{
  visible: boolean;
  duration: number;
  title?: React.ReactNode;
  icon?: React.ReactNode;
  children: React.ReactNode;
  color: string;
  co: ((theme: Theme) => React.CSSProperties) | React.CSSProperties;
  className: string;
}>;

const Toast = ({ title, color, children, co, className }: ToastProps) => {
  console.log('title', title);

  const theme = useTheme() as Theme;

  const styles = css({
    position: 'fixed',
    top: '50%',
    left: '50%',
    height: '2em',
    transform: 'translate(-50%, -50%)',
    borderRadius: '4px',
    background: color || theme?.color?.black || '#232149',
    opacity: '0.8',
    color: 'white',
    padding: '.4em 1em',
    ...(typeof co == 'function' ? co(theme) : co),
  });

  const computedClassNames = clsx(className);
  return (
    <div css={styles} className={computedClassNames}>
      {children || title}
    </div>
  );
};

Toast.show = ({ title, color, icon, duration = 2000, ...rest }: ToastProps) => {
  const aside = document.createElement('aside');
  document.body.appendChild(aside);
  ReactDOM.render(<Toast {...{ title, icon, ...rest }} />, aside);
  setTimeout(() => {
    ReactDOM.unmountComponentAtNode(aside);
    document.body.removeChild(aside);
  }, duration);
};

export default Toast;
