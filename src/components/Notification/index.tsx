/** @jsxImportSource @emotion/react */
import clsx from 'clsx';
import { css, useTheme, keyframes } from '@emotion/react';
import { Theme } from '../../constants/theme';
import { useEffect } from 'react';

type NotificationProps = {
  show?: boolean;
  delay?: number;
  co: ((theme: Theme) => React.CSSProperties) | React.CSSProperties;
  onClose: () => void;
  className: string;
  children: React.ReactNode;
};

const Notification = ({ show = false, onClose, delay = 3, co, children, className, ...props }: NotificationProps) => {
  const theme = useTheme() as Theme;
  const anim = keyframes`
    from, 20%, 53%, 80%, to {
      transform: translate3d(0,0,0);
    }

    40%, 43% {
      transform: translate3d(0, -30px, 0);
    }

    70% {
      transform: translate3d(0, -15px, 0);
    }

    90% {
      transform: translate3d(0,-4px,0);
    }
  `;

  const styles = css({
    position: 'fixed',
    zIndex: theme.zIndex.notification,
    top: 0,
    transform: `translateY(${show ? '0%' : '-100%'})`,
    transition: '.3s all',
    animation: `${anim} .3s`,
    ...(typeof co == 'function' && co(theme)),
  });
  const computedClassNames = clsx(className);

  useEffect(() => {
    if (show == true)
      setTimeout(() => {
        onClose();
      }, delay * 1000);
  }, [show]);
  return (
    <aside css={styles} className={computedClassNames} {...props}>
      {children}
    </aside>
  );
};

export default Notification;
