/** @jsxImportSource @emotion/react */
import clsx from 'clsx';
import { css, useTheme } from '@emotion/react';
import { Theme } from '../../constants/theme';
import * as React from 'react';

type BadgeProps = Partial<{
  size: string | number;
  show: boolean;
  color: string;
  offsetX: string | number;
  offsetY: string | number;
  position: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
  content: React.ReactNode;
  co: ((theme: Theme) => React.CSSProperties) | React.CSSProperties;
}>;

const Badge = ({
  size = '20',
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
      borderRadius: theme ? theme.common.circularEdge : '9999em',
      visibility: show ? 'visible' : 'hidden',
      background: color || theme ? theme.color.red : '#e32b3a',
      color: theme ? theme.color.white : '#fff',
      lineHeight: `${size as number}px`,
      minWidth: `${size as number}px`,
      fontSize: '12px',
      height: `${size as number}px`,
      textAlign: 'center',
      position: 'absolute',
      padding: '0 6px',
      ...getInset(),
      boxShadow: '0 0 0 1px #fff',
      transition: 'all .3s',
      ...(typeof co == 'function' ? co(theme) : co),
    },
  });
  return (
    <div css={badgeStyles} aria-label='badge' className={clsx(className)} {...props}>
      {['string', 'number'].includes(typeof content) || !content ? <span>{content}</span> : content}
      {children}
    </div>
  );
};

export default Badge;
