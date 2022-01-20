/** @jsxImportSource @emotion/react */
import clsx from 'clsx';
import { css, useTheme } from '@emotion/react';
import { Theme } from '../../constants/theme';
import * as React from 'react';
import { fade } from '../../constants/style';

type OverlayProps = Partial<{
  color: string;
  visible: boolean;
  blur: boolean;
  opacity: number;
  children: React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  co: ((theme: Theme) => React.CSSProperties) | React.CSSProperties;
  className: string;
}>;

const Overlay = ({
  opacity = 0.4,
  blur = false,
  color,
  visible = false,
  children,
  onClick,
  co,
  className,
}: OverlayProps) => {
  const theme = useTheme() as Theme;
  const styles = css({
    display: visible ? 'flex' : 'none',
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    background: fade(color || theme?.color?.greyLight || '#56538D', opacity),
    backdropFilter: blur ? 'blur(4px)' : '',
    transform: visible ? 'scale(1)' : '',
    '& > *': {
      margin: 'auto',
    },

    ...(typeof co == 'function' ? co(theme) : co),
  });
  const computedOverlayClassNames = clsx(className);
  const handleClickOverlay = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    onClick?.(e);
  };
  return (
    <aside css={styles} className={computedOverlayClassNames} onClick={handleClickOverlay}>
      {children}
    </aside>
  );
};

export default Overlay;
