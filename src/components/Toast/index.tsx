/** @jsxImportSource @emotion/react */
import clsx from 'clsx';
import { css, useTheme } from '@emotion/react';
import { Theme } from '../../styles/themes';
import * as React from 'react';
import ReactDOM from 'react-dom';
import { useEffect, useState, useCallback, createContext, ReactNode } from 'react';
import Card from '../Card';
import Text from '../Text';
import Container from '../Container';

type ToastProps = Partial<{
  visible: boolean;
  duration: number;
  title?: ReactNode;
  icon?: ReactNode;
  content?: ReactNode;
  children: ReactNode;
  color: string;
  co: ((theme: Theme) => React.CSSProperties) | React.CSSProperties;
  className: string;
}>;

const Toast = ({ title, content, color, children, co, className }: ToastProps) => {
  const theme = useTheme() as Theme;
  const styles = css({
    position: 'fixed',
    top: '50%',
    left: '50%',
    width: '80vw',
    height: 'auto',
    textAlign: 'center',
    transform: 'translate(-50%, -50%)',
    borderRadius: '4px',
    background: color || theme?.color?.black || 'rgba(0, 0, 0, 0.45)',
    color: 'white',
    padding: '.4em 1em',
    ...(typeof co == 'function' ? co(theme) : co),
  });

  const computedClassNames = clsx(className);
  return (
    <div css={styles} className={computedClassNames}>
      {children || (
        <div>
          <div>{title}</div>
          <div>{content}</div>
        </div>
      )}
    </div>
  );
};

Toast.show = ({ title, color, icon, duration = 2000, ...rest }: ToastProps) => {
  const aside = document.createElement('aside');
  document.body.appendChild(aside);
  ReactDOM.render(<Toast {...{ title, icon, color, ...rest }} />, aside);
  setTimeout(() => {
    ReactDOM.unmountComponentAtNode(aside);
    document.body.removeChild(aside);
  }, duration);
};

export default Toast;
