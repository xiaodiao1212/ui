/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from 'react';
import { useCSS, useTheme, useThemedCSS } from '../../styles/css';
import { Theme } from '../../styles/themes';
import { ComponentBaseProps } from '../props';
type OverlayEvent = {};
type OverlayProps = ComponentBaseProps &
  OverlayEvent &
  Partial<{
    color: string;
    visible: boolean;
    blur: boolean;
    opacity: number;

    onClick: (event: React.TouchEvent) => void;
  }>;

const Overlay = ({
  opacity = 0.4,
  blur = false,
  color,
  visible = false,
  children,
  onClick,
  css,
  ...props
}: OverlayProps) => {
  const theme = useTheme();

  const styles = useCSS({
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
    ...useThemedCSS(theme, css),
  });

  const handleClickOverlay = (e: React.TouchEvent) => {
    onClick?.(e);
  };

  return (
    <aside css={styles} onClick={handleClickOverlay} {...props}>
      {children}
    </aside>
  );
};

export default Overlay;
