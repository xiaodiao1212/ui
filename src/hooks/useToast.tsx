/** @jsxImportSource @emotion/react */

import { css, useTheme } from '@emotion/react';
import { Theme } from '../constants/theme';
import * as React from 'react';
import ReactDOM from 'react-dom';
import { useEffect, useState } from 'react';

import { useSystem } from '../hooks';
import Toast from '../components/Toast';

export function useToast(
  content: string,
  time: number = 2000,
  co?: ((theme: Theme) => React.CSSProperties) | React.CSSProperties,
) {
  const [visible, setVisible] = useState(true);
  const system = useSystem();
  useEffect(() => {
    const t = setTimeout(() => {
      setVisible(false);
    }, time);
    return clearTimeout(t);
  }, []);
  return ReactDOM.createPortal(
    <Toast visible={visible} co={co}>
      {content}
    </Toast>,
    system.root as Element,
  );
}
