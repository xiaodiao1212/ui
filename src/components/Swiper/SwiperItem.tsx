/** @jsxImportSource @emotion/react */

import { css, useTheme } from '@emotion/react';
import clsx from 'clsx';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Theme } from '../../constants/theme';

type SwiperItemProps = {
  onClick?: (index: number) => any;
  width?: string;
  offsetX?: number;
  offsetY?: number;
  index?: number;
  className?: string;
  children?: React.ReactNode;
  ref?: React.RefObject<any>;
};

const SwiperItem = ({ offsetX = 0, offsetY = 0, width, index = 0, onClick, className, children }: SwiperItemProps) => {
  const theme = useTheme() as Theme;

  const styles = css({
    display: 'inline-flex',
    width: '100%',
  });

  return (
    <li css={styles} className={clsx(className)} onClick={e => onClick?.(index)}>
      {children}
    </li>
  );
};

export default SwiperItem;
