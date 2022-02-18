/** @jsxImportSource @emotion/react */
import clsx from 'clsx';
import { css, useTheme } from '@emotion/react';
import { Theme } from '../../constants/theme';
import * as React from 'react';
import { debounce } from '../../utils';

type FabProps = Partial<{
  adsorption?: boolean;
  draggable?: boolean;
  co: ((theme: Theme) => React.CSSProperties) | React.CSSProperties;
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
  co,
  className,
  ...props
}: FabProps & React.ComponentPropsWithoutRef<'aside'>) => {
  const [computedPosition, setComputedPosition] = React.useState(position);
  const [maxLeft, setMaxLeft] = React.useState(0);
  const [maxTop, setMaxTop] = React.useState(0);
  const [clientProperty, setClientProperty] = React.useState<any>(0);
  const theme = useTheme() as Theme;
  const styles = css({
    position: 'fixed',
    ...position,
    zIndex: theme.zIndex.floatingWindow,
    transition: '.1s all',
    ...(co && (typeof co == 'function' ? co(theme) : co)),
  });
  const computedClassNames = clsx(className);
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
    <aside css={styles} {...touchProps} className={computedClassNames} {...props}>
      {children}
    </aside>
  );
};

export default Fab;
