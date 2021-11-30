/** @jsxImportSource @emotion/react */

import { Theme } from '../../constants/theme';
import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { useTheme, css } from '@emotion/react';
import Overlay from '../Overlay';

type DrawerPosition = 'left' | 'right' | 'top' | 'bottom';
type DrawerProps = {
  width?: string;
  height?: string;
  position?: DrawerPosition;
  showOverlay?: boolean;
  shy?: boolean;
  open?: boolean;
  onClose: (e: any) => any;
  co: ((theme: Theme) => React.CSSProperties) | React.CSSProperties;
};
const Drawer = ({
  width = '40vw',
  height = 'auto',
  position = 'left',
  open = false,
  onClose,
  showOverlay = true,
  shy = true,
  children,
  className,
  co,
  ...props
}: DrawerProps & React.ComponentPropsWithoutRef<'aside'>) => {
  const [closeStyle, setCloseStyle] = useState({});
  const [baseYOffset, setBaseYOffset] = useState(height != 'auto' ? height : '-100vh');
  const [baseXOffset, setBaseXOffset] = useState('-' + width);
  const [contentStyle, setContentStyle] = useState({});
  const [openStyle, setOpenStyle] = useState({});
  const [kfOut, setKfOut] = useState({});
  const [kfIn, setKfIn] = useState({});
  const theme = useTheme() as Theme;

  const contentStyles = css({
    position: 'fixed',
    zIndex: theme.zIndex.drawer,
    ...contentStyle,
    transition: 'all .3s',
    ...(open ? openStyle : { ...closeStyle }),
    ...(typeof co == 'function' ? co(theme) : co),
  });
  const containerStyles = css({
    position: 'fixed',
    zIndex: theme ? theme.zIndex.floatingWindow : 700,
    transition: '.1s all',
    ...(typeof co == 'function' ? co(theme) : co),
  });
  const computedClassNames = clsx(className);
  const handleClickOverlay = (e: any) => {
    if (shy) {
      onClose(e);
    }
  };

  React.useEffect(() => {
    let to: any = {
      left: '-' + width,
    };
    let from: any = {
      left: '0',
    };
    let from2: any = {
      left: '-' + width,
    };
    let to2: any = {
      left: '0',
    };
    switch (position) {
      case 'right':
        from2 = to = {
          right: '-' + width,
        };
        to2 = from = {
          right: '0',
        };
        setContentStyle({
          width: width,
          height: '100%',
          right: baseXOffset,
          top: '0',
          bottom: '0',
        });
        setOpenStyle({ right: 0 });
        break;
      case 'top':
        from2 = to = {
          top: '-' + height == 'auto' ? '100vh' : height,
        };
        to2 = from = {
          top: '0',
        };
        setContentStyle({
          width: '100%',
          height: height,
          left: 0,
          right: 0,
          top: baseYOffset,
        });
        setOpenStyle({ top: 0 });
        break;
      case 'bottom':
        from2 = to = {
          bottom: '-' + height == 'auto' ? '100vh' : height,
        };
        to2 = from = {
          bottom: '0',
        };
        setContentStyle({
          width: '100%',
          height: height,
          left: 0,
          right: 0,
          bottom: baseYOffset,
        });
        setOpenStyle({ bottom: 0 });
        break;
      case 'left':
        setContentStyle({
          width: width,
          height: '100%',
          left: baseXOffset,
          top: '0',
          bottom: '0',
        });
        setOpenStyle({ left: 0 });
        break;
      default:
        break;
    }
    setBaseYOffset(height != 'auto' ? height : '-100vh');
    setBaseXOffset('-' + width);
    setKfOut({
      from: from,
      to: to,
    });
    setKfIn({
      from: from2,
      to: to2,
    });
  }, [position, width, height]);
  return (
    <aside
      css={css({
        visibility: open ? 'visible' : 'hidden',
      })}
      {...props}>
      <Overlay
        show={open}
        onClick={handleClickOverlay}
        co={() => ({
          display: showOverlay ? 'flex' : 'none',
        })}
      />
    </aside>
  );
};

export default Drawer;
