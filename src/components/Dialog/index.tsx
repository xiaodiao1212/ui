/** @jsxImportSource @emotion/react */
import clsx from 'clsx';
import { css, keyframes, useTheme } from '@emotion/react';
import { Theme } from '../../constants/theme';
import * as React from 'react';
import Overlay from '../Overlay';

type DialogProps = {
  shy?: boolean;
  visible: boolean;
  opacity?: number;
  animationType?: 'none' | 'slide' | 'fade' | string;
  handleDialogVisibleChange?: () => void;
  children?: React.ReactNode;
  co?: ((theme: Theme) => React.CSSProperties) | React.CSSProperties;
  className?: string;
};

const Dialog = ({
  visible = false,
  shy = true,
  opacity,
  handleDialogVisibleChange,
  animationType = 'slide',
  children,
  co,
  className,
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
            transform: 'translateY(10%)',
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
            transform: 'translateY(10%)',
          },
          '0%': {
            opacity: 1,
            transform: 'translateY(0%)',
          },
        }
      : {},
  );
  const styles = css({
    '& > *:first-of-child': {
      animation: `${visible ? mountAnim : unmountAnim} .3s`,
    },
    ...(co && (typeof co == 'function' ? co(theme) : co)),
  });
  const computedDialogClassNames = clsx(className);

  return (
    <Overlay
      onClick={shy ? handleDialogVisibleChange : () => {}}
      css={styles}
      opacity={opacity || 0}
      visible={visible}
      className={computedDialogClassNames}>
      {children}
    </Overlay>
  );
};

export default Dialog;
