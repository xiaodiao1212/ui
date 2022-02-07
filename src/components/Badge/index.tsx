/** @jsxImportSource @emotion/react */
import clsx from 'clsx';
import { css, useTheme } from '@emotion/react';
import { Theme } from '../../constants/theme';
import * as React from 'react';

type BadgeProps = Partial<{
  size: number;
  show: boolean;
  color: string;
  offsetX: string | number;
  offsetY: string | number;
  // position: 'top' | 'left' | 'bottom' | 'right' | 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'
  position: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
  content: React.ReactNode;
  co: ((theme: Theme) => React.CSSProperties) | React.CSSProperties;
}>;

const Badge = ({
  size = 14,
  show = true,
  co,
  offsetX,
  offsetY,
  color,
  position = 'top-right',
  content,
  children,
  className,
  ...props
}: BadgeProps & React.ComponentPropsWithoutRef<'div'>) => {
  const theme = useTheme() as Theme;
  const getInset = () => {
    switch (position) {
      // case 'top':
      //   return {
      //     left: offsetX || 0,
      //     top: offsetY || 0,
      //     transform: 'translate3d(-50%,-50%,0)',
      //   }
      // case 'left':
      //   return {
      //     left: offsetX || 0,
      //     top: offsetY || 0,
      //     transform: 'translate3d(-50%,-0%,0)',
      //   }
      // case 'bottom':
      //   return {
      //     left: offsetX || 0,
      //     top: offsetY || 0,
      //     transform: 'translate3d(-50%,-50%,0)',
      //   }
      // case 'right':
      //   return {
      //     left: offsetX || 0,
      //     top: offsetY || 0,
      //     transform: 'translate3d(-50%,-50%,0)',
      //   }

      case 'top-left':
        return {
          left: offsetX || 0,
          top: offsetY || 0,
          transform: 'translate3d(-50%,-50%,0)',
        };
      case 'top-right':
        return {
          right: offsetX || 0,
          top: offsetY || 0,
          transform: 'translate3d(50%,-50%,0)',
        };
      case 'bottom-left':
        return {
          left: offsetX || 0,
          bottom: offsetY || 0,
          transform: 'translate3d(-50%,50%,0)',
        };
      case 'bottom-right':
        return {
          right: offsetX || 0,
          bottom: offsetY || 0,
          transform: 'translate3d(50%,50%,0)',
        };
      default:
        return {
          right: offsetX || 0,
          top: offsetY || 0,
          transform: 'translate3d(50%,-50%,0)',
        };
    }
  };
  const badgeStyles = css({
    position: 'relative',
    '> *:first-child': {
      borderRadius: theme ? theme.common.circularEdge : 999,
      visibility: show ? 'visible' : 'hidden',
      background: color || (theme ? theme.color.red : '#e32b3a'),
      color: theme ? theme.color.white : '#fff',
      lineHeight: `${size}px`,
      minWidth: `${size}px`,
      fontSize: '12px',
      height: `${size}px`,
      textAlign: 'center',
      position: 'absolute',
      ...getInset(),
      boxShadow: '0 0 0 1px #fff',
      transition: 'visibility all .3s',
      ...(typeof co == 'function' ? co(theme) : co),
    },
  });
  return (
    <span css={badgeStyles} className={clsx(className)} {...props}>
      {['string', 'number'].includes(typeof content) || !content ? <span>{content}</span> : content}
      {children}
    </span>
  );
};

export default Badge;
