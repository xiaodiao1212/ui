/** @jsxImportSource @emotion/react */
import clsx from 'clsx';
import { css, useTheme } from '@emotion/react';
import { Theme } from '../../constants/theme';
import * as React from 'react';
import ReactDOM from 'react-dom';
import { useEffect, useState } from 'react';
import { AppContext } from '../App';
import { useSystem } from '../../hooks';
import Card from '../Card';
import Text from '../Text';
import Container from '../Container';

type ToastProps = Partial<{
  visible: boolean;
  duration: number;
  children: React.ReactNode;
  onChange: () => any;
  co: ((theme: Theme) => React.CSSProperties) | React.CSSProperties;
  className: string;
}>;

const Toast = ({ visible, duration = 2000, children, onChange, co, className }: ToastProps) => {
  const theme = useTheme() as Theme;
  const system = useSystem();
  const [v, setV] = useState(true);
  const styles = css({
    display: 'flex',
    position: 'fixed',
    top: 0,
    left: '10%',
    bottom: 0,
    right: 0,
    zIndex: 999,
    transform: 'scale(1)',
    maxWidth: '80vw',
    // 下面trick实现居中
    '& > *': {
      margin: 'auto',
    },
  });

  useEffect(() => {
    const t = setTimeout(() => {
      setV(false);
      onChange?.();
    }, duration);
    if (!v) return clearTimeout(t);
  }, [v]);

  useEffect(() => {
    console.log('visible', visible);
  }, [visible]);
  const computedToastClassNames = clsx(className);
  const Toast = (
    <aside css={styles} className={computedToastClassNames}>
      {typeof children === 'string' ? (
        <Card
          co={{ borderRadius: '7px', background: theme.color.black, ...(typeof co == 'function' ? co(theme) : co) }}>
          <Container pa='.8em 2em'>
            <Text dark>{children}</Text>
          </Container>
        </Card>
      ) : (
        children
      )}
    </aside>
  );

  return Toast;
};

export default Toast;
