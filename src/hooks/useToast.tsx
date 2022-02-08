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
  time = 2000,
  co?: ((theme: Theme) => React.CSSProperties) | React.CSSProperties,
) {
  let visible = true;
  console.log('vv', visible);

  const to = setTimeout(() => {
    visible = false;
  }, time);

  ReactDOM.render(
    <Toast visible={visible} co={co}>
      {content}
    </Toast>,
    document.getElementById('root'),
  );

  return clearTimeout(to);
}
