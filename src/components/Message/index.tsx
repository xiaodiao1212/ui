/** @jsxImportSource @emotion/react */

import { Theme } from '../../styles/themes';
import { createRoot } from 'react-dom/client';
import { ReactNode } from 'react';
import { Base } from '../props';
import { useCSS, useTheme, useFunctionLikeValue } from '../../styles/css';

type MessageProps = Base &
  Partial<{
    visible: boolean;
    duration: number;
    title?: ReactNode;
    icon?: ReactNode;
    content?: ReactNode;
    color: string;
  }>;

const Message = ({ title, content, color, children, css, ...props }: MessageProps) => {
  const theme = useTheme() as Theme;
  const styles = useCSS({
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
    ...useFunctionLikeValue(theme, css),
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

Message.show = ({ title, color, icon, duration = 2000, ...rest }: MessageProps) => {
  const aside = document.createElement('aside');
  document.body.appendChild(aside);
  const root = createRoot(aside);
  root.render(<Message {...({ title, icon, color, ...rest } as any)} />);

  setTimeout(() => {
    root.unmount();
    document.body.removeChild(aside);
  }, duration);
};

export default Message;
