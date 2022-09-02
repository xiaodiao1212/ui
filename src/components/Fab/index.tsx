/** @jsxImportSource @emotion/react */

import { Theme } from '../../styles/themes';
import { Base, Themed } from '../props';

import { useThemedCSS, useCSS, useTheme } from '../../styles/css';

import { debounce } from '../../utils';
import { useState } from 'react';

type FabProps = Base &
  Partial<{
    adsorption?: boolean;
    draggable?: boolean;
    position?: {
      left: number | string;
      top: number | string;
    };
  }>;

const Fab = ({
  draggable = false,
  adsorption = false,
  position = {
    left: 0,
    top: 0,
  },
  children,
  css,
  ...props
}: FabProps) => {
  const [computedPosition, setComputedPosition] = useState(position);
  const [maxLeft, setMaxLeft] = useState(0);
  const [maxTop, setMaxTop] = useState(0);
  const [clientProperty, setClientProperty] = useState<any>(0);
  const theme = useTheme() as Theme;
  const styles = useCSS({
    position: 'fixed',
    ...position,
    zIndex: theme.zIndex.floatingWindow,
    transition: '.25s all',
    ...useThemedCSS(theme, css),
  });

  const handleTouchStart = (e: any) => {
    if (!clientProperty) {
      setClientProperty({
        documentElement: e.touches[0].target.ownerDocument.documentElement,
        clientHeight: e.touches[0].target.clientHeight,
        clientWidth: e.touches[0].target.clientWidth,
      });
      setMaxTop(e.touches[0].target.ownerDocument.documentElement.clientHeight - e.touches[0].target.clientHeight);
      setMaxLeft(e.touches[0].target.ownerDocument.documentElement.clientWidth - e.touches[0].target.clientWidth);
    }
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    debounce(
      () =>
        setComputedPosition({
          left: Math.min(maxLeft, Math.max(0, parseFloat(e.touches[0].pageX.toFixed(2)))),
          top: Math.min(maxTop, Math.max(0, parseFloat(e.touches[0].pageY.toFixed(2)))),
        }),
      2,
    );
  };

  const handleTouchEnd = () => {
    if (adsorption) {
      if (computedPosition.left >= (clientProperty.documentElement.clientWidth * 3) / 4) {
        setComputedPosition((v: any) => ({
          ...v,
          left: maxLeft,
        }));
      }
      if (computedPosition.left <= clientProperty.documentElement.clientWidth / 4) {
        setComputedPosition((v: any) => ({
          ...v,
          left: 0,
        }));
      }
    }
  };

  const touchProps = draggable
    ? {
        onTouchStart: handleTouchStart,
        onTouchEnd: handleTouchEnd,
        onTouchMove: handleTouchMove,
      }
    : {};
  return (
    <aside css={styles} {...touchProps} {...props}>
      {children}
    </aside>
  );
};

export default Fab;
