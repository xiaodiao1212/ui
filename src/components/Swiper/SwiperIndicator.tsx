/** @jsxImportSource @emotion/react */

import { css, useTheme } from '@emotion/react';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Theme } from '../../styles/themes';
import { ComponentBaseProps } from '../props';

type SwiperIndicatorProps = ComponentBaseProps & {
  onClick?: (index: number) => any;
  width?: string;
  offsetX?: number;
  offsetY?: number;
  index?: number;

  ref?: React.RefObject<any>;
};

const SwiperIndicator = ({
  offsetX = 0,
  offsetY = 0,
  width,
  index = 0,
  onClick,
  children,
  ...props
}: SwiperIndicatorProps) => {
  const theme = useTheme();

  const styles = css({
    display: 'inline-flex',
    width: '100%',
  });

  return (
    <li css={styles} onClick={e => onClick?.(index)} {...props}>
      {children}
    </li>
  );
};

export default SwiperIndicator;
