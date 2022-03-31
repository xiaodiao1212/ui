/** @jsxImportSource @emotion/react */
import clsx from 'clsx';
import { css, keyframes, useTheme } from '@emotion/react';
import { Theme } from '../../styles/themes';
import * as React from 'react';
import { Base } from '../props';

type DialogProps = Base & {
  shy?: boolean;
  visible: boolean;
  mask?: boolean;
  loading?: boolean;
  close?: boolean;
  animationType?: 'none' | 'slide' | 'fade' | string;
  onClose?: () => void;
};

const Dialog = ({
  visible = false,
  shy = true,
  loading,
  close,
  mask,
  onClose,
  animationType = 'slide',
  children,
  co,
  ...props
}: DialogProps) => {
  const theme = useTheme() as Theme;
  const mountAnim = keyframes(
    animationType == 'fade'
      ? {
          '0%': {
            opacity: 0,
          },
          '100%': {
            opacity: 1,
          },
        }
      : animationType == 'slide'
      ? {
          '0%': {
            opacity: 0,
            transform: 'translateY(5%)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0%)',
          },
        }
      : {},
  );
  const unmountAnim = keyframes(
    animationType == 'fade'
      ? {
          '0%': {
            opacity: 1,
          },
          '100%': {
            opacity: 0,
          },
        }
      : animationType == 'slide'
      ? {
          '100%': {
            opacity: 0,
            transform: 'translateY(5%)',
          },
          '0%': {
            opacity: 1,
            transform: 'translateY(0%)',
          },
        }
      : {},
  );

  const containerStyles = css({
    position: 'fixed',
    inset: 0,
    display: 'flex',
    alignItems: 'center',
    zIndex: theme.zIndex.dialog,
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    maxHeight: '100vh',
    overflowY: 'auto',
    overflowX: 'hidden',
    paddingTop: '80px',
    paddingBottom: '80px',
    backgroundColor: 'rgba(0,0,0,.5)',
    visibility: visible ? 'visible' : 'hidden',
  });
  // The CSS properties of drawer content container,
  const contentStyles = css({
    touchAction: 'none',
    position: 'fixed',
    zIndex: theme.zIndex.drawer,
    animation: `${visible ? mountAnim : unmountAnim} .3s`,

    transition: 'all .25s cubic-bezier(0.4, 0, 0.2, 1) 0ms',
  });
  const closeStyles = css({
    position: 'absolute',
    top: '-6px',
    right: '-6px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '12px',
    transition: 'all .25s ease',
  });
  const loadingStyles = css({
    position: 'absolute',
    top: '0',
    left: '0',
    height: '100%',
    borderRadius: 'inherit',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'rgba(255,255,255,.8)',
  });
  const headerStyles = css({});
  const footerStyles = css({});

  const handleClickClose = () => {
    shy && onClose?.();
  };
  return (
    <aside css={containerStyles} onClick={handleClickClose}>
      {loading && <div css={loadingStyles} />}
      {close && <button css={closeStyles} onClick={handleClickClose}></button>}
      <header css={headerStyles}></header>
      {/* {mask && <div css={maskStyles} onClick={handleClickmask}></div>} */}
      <div css={contentStyles}>{children}</div>
      <footer css={footerStyles}></footer>
    </aside>
  );
};

export default Dialog;
