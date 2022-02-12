/** @jsxImportSource @emotion/react */
import clsx from 'clsx';
import { css, useTheme, keyframes } from '@emotion/react';
import { Theme } from '../../constants/theme';
import { useEffect } from 'react';

type NotificationProps = {
  visible: boolean;
  delay?: number;
  co?: ((theme: Theme) => React.CSSProperties) | React.CSSProperties;
  handleModalVisibleChange: () => void;
  className?: string;
  children?: React.ReactNode;
};

const Notification = ({
  visible = false,
  handleModalVisibleChange,
  delay = 3,
  co,
  children,
  className,
  ...props
}: NotificationProps) => {
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
    left: 0,
    right: 0,
    background: 'white',
    transform: `translateY(${visible ? '0%' : '-100%'})`,
    transition: '.3s all',
    animation: `${anim} .3s`,
    ...(co && (typeof co == 'function' ? co(theme) : co)),
  });
  const computedClassNames = clsx(className);

  useEffect(() => {
    if (visible == true)
      setTimeout(() => {
        handleModalVisibleChange?.();
      }, delay * 1000);
  }, [visible]);
  return (
    <aside css={styles} className={computedClassNames} {...props}>
      {children}
    </aside>
  );
};

export default Notification;
