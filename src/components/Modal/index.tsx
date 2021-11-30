/** @jsxImportSource @emotion/react */
import clsx from 'clsx';
import { css, useTheme } from '@emotion/react';
import { Theme } from '../../constants/theme';
import * as React from 'react';
import Overlay from '../Overlay';

type ModalProps = Partial<{
  show: boolean;
  children: React.ReactNode;
  co: ((theme: Theme) => React.CSSProperties) | React.CSSProperties;
  className: string;
}>;

const Modal = ({ show = false, children, co, className }: ModalProps) => {
  const theme = useTheme() as Theme;
  const styles = css({
    ...(typeof co == 'function' ? co(theme) : co),
  });
  const computedModalClassNames = clsx(className);

  return (
    <Overlay css={styles} opacity={0} show={show} className={computedModalClassNames}>
      {children}
    </Overlay>
  );
};

export default Modal;
