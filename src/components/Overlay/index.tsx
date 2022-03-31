/** @jsxImportSource @emotion/react */

import { css, useTheme } from '@emotion/react';
import { Theme } from '../../styles/themes';
import * as React from 'react';
import { Base } from '../props';

type OverlayProps = Base &
  Partial<{
    color: string;
    visible: boolean;
    blur: boolean;
    opacity: number;

    onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  }>;

const Overlay = ({
  opacity = 0.4,
  blur = false,
  color,
  visible = false,
  children,
  onClick,
  co,
  ...props
}: OverlayProps) => {
  const theme = useTheme() as Theme;
  const styles = css({
    display: visible ? 'flex' : 'none',
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    background: color || theme?.color?.greyLight || '#56538D',
    opacity,
    backdropFilter: blur ? 'blur(4px)' : '',
    transform: visible ? 'scale(1)' : '',
    '& > *': {
      margin: 'auto',
    },
    ...(co && (typeof co == 'function' ? co(theme) : co)),
  });

  const handleClickOverlay = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    onClick?.(e);
  };
  return (
    <aside css={styles} onClick={handleClickOverlay} {...props}>
      {children}
    </aside>
  );
};

export default Overlay;
