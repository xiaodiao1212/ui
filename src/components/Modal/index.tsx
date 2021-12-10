/** @jsxImportSource @emotion/react */
import clsx from 'clsx';
import { css, useTheme } from '@emotion/react';
import { Theme } from '../../constants/theme';
import * as React from 'react';
import Overlay from '../Overlay';

type ModalProps = {
  shy?: boolean;
  visible: boolean;
  opacity?: number;
  animationType?: 'none' | 'slide' | 'fade' | string;
  handleModalVisibleChange?: () => void;
  children?: React.ReactNode;
  co?: ((theme: Theme) => React.CSSProperties) | React.CSSProperties;
  className?: string;
};

const Modal = ({
  visible = false,
  shy = true,
  opacity,
  handleModalVisibleChange,
  children,
  co,
  className,
}: ModalProps) => {
  const theme = useTheme() as Theme;
  const styles = css({
    ...(typeof co == 'function' ? co(theme) : co),
  });
  const computedModalClassNames = clsx(className);

  return (
    <Overlay
      onClick={shy ? handleModalVisibleChange : () => {}}
      css={styles}
      opacity={opacity || 0}
      visible={visible}
      className={computedModalClassNames}>
      {children}
    </Overlay>
  );
};

export default Modal;
