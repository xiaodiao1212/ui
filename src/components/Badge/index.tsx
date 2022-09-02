/** @jsxImportSource @emotion/react */

import { Theme } from '../../styles/themes';
import { Base, Themed } from '../props';

import { useFunctionLikeValue, useCSS, useTheme, useColor } from '../../styles/css';
import vars from '../../styles/vars';

type BadgeProps = Base &
  Partial<{
    size: number;
    show: boolean;
    color: string;
    offsetX: string | number;
    offsetY: string | number;
    position: 'top' | 'left' | 'bottom' | 'right' | 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
    content: React.ReactNode;
  }>;

const Badge = ({
  size = 14,
  show = true,
  css,
  offsetX,
  offsetY,
  color,
  position = 'top-right',
  content,
  children,
  className,
  ...props
}: BadgeProps) => {
  const theme = useTheme() as Theme;
  const getInset = () => {
    switch (position) {
      case 'top':
        return {
          left: offsetX || 0,
          top: offsetY || 0,
          transform: 'translate3d(-50%,-50%,0)',
        };
      case 'left':
        return {
          left: offsetX || 0,
          top: offsetY || 0,
          transform: 'translate3d(-50%,-0%,0)',
        };
      case 'bottom':
        return {
          left: offsetX || 0,
          top: offsetY || 0,
          transform: 'translate3d(-50%,-50%,0)',
        };
      case 'right':
        return {
          left: offsetX || 0,
          top: offsetY || 0,
          transform: 'translate3d(-50%,-50%,0)',
        };

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
  const badgeStyles = useCSS({
    display: 'inline-flex',
    position: 'relative',
    '& > *:first-of-child': {
      borderRadius: vars.radius.full,
      visibility: show ? 'visible' : 'hidden',
      background: useColor('red', theme, color),
      color: useColor('white', theme),
      lineHeight: `${size}px`,
      minWidth: `${size}px`,
      fontSize: '12px',
      height: `${size}px`,
      textAlign: 'center',
      position: 'absolute',
      ...getInset(),
      boxShadow: `0 0 0 1px ${theme.color.white}`,
      transition: 'visibility all .3s',
      ...useFunctionLikeValue(theme, css),
    },
  });
  return (
    <div css={badgeStyles} {...props}>
      {['string', 'number'].includes(typeof content) || !content ? <span>{content}</span> : content}
      {children}
    </div>
  );
};

export default Badge;
