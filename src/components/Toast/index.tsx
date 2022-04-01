/** @jsxImportSource @emotion/react */

import { css, useTheme } from '@emotion/react';
import { Theme } from '../../styles/themes';
import { createRoot } from 'react-dom/client';
import { ReactNode } from 'react';
import { Base } from '../props';
type ToastProps = Base &
  Partial<{
    visible: boolean;
    duration: number;
    title?: ReactNode;
    icon?: ReactNode;
    content?: ReactNode;
    color: string;
  }>;

const Toast = ({ title, content, color, children, co, ...props }: ToastProps) => {
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

  return (
    <div css={styles} {...props}>
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
  const root = createRoot(aside);
  root.render(<Toast {...{ title, icon, color, ...rest }} />);

  setTimeout(() => {
    root.unmount();
    document.body.removeChild(aside);
  }, duration);
};

export default Toast;
