/** @jsxImportSource @emotion/react */

import { css, useTheme } from '@emotion/react';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Theme } from '../../styles/themes';
import { Base } from '../props';

type SwiperItemProps = Base & {
  onClick?: (index: number) => any;
  width?: string;
  offsetX?: number;
  offsetY?: number;
  index?: number;

  ref?: React.RefObject<any>;
};

const SwiperItem = ({ offsetX = 0, offsetY = 0, width, index = 0, onClick, children, ...props }: SwiperItemProps) => {
  const theme = useTheme() as Theme;

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

export default SwiperItem;
