/** @jsxImportSource @emotion/react */
import clsx from 'clsx';
import { css, keyframes, useTheme } from '@emotion/react';
import { Theme } from '../../styles/themes';
import * as React from 'react';
import { useState } from 'react';

type TooltipProps = {
  backgroundColor?: ((theme: Theme) => string) | string;
  color?: ((theme: Theme) => string) | string;
  info?: React.ReactNode;
  width?: string;
  show?: boolean;
  position?: 'top' | 'left' | 'right' | 'bottom';
  co?: ((theme: Theme) => React.CSSProperties) | React.CSSProperties;
};

const ToolTip = ({
  co,
  children,
  className,
  backgroundColor = '#000',
  color = '#fff',
  width = '60px',
  position = 'right',
  show,
  info,
  ...props
}: TooltipProps & Omit<React.ComponentPropsWithoutRef<'div'>, 'color'>) => {
  const [computedPosition, setComputedPosition] = useState({});
  const [afterPosition, setAfterPosition] = useState({});
  const theme = useTheme() as Theme;
  const styles = css({
    position: 'relative',
    display: 'inline-block',
    ...(co && (typeof co == 'function' ? co(theme) : co)),
    '& .tooltiptext': {
      visibility: show ? 'visible' : 'hidden',
      fontSize: '12px',
      width: width,
      backgroundColor:
        typeof backgroundColor == 'function' ? (backgroundColor as (theme: Theme) => string)(theme) : backgroundColor,
      color: typeof color == 'function' ? (color as (theme: Theme) => string)(theme) : color,
      textAlign: 'center',
      borderRadius: '6px',
      padding: '5px 0',
      position: 'absolute',
      ...computedPosition,
      zIndex: 1,
      '&::after': {
        content: '""',
        position: 'absolute',
        ...afterPosition,
        borderWidth: '5px',
        borderStyle: 'solid',
        borderColor: 'transparent black transparent transparent',
      },
    },
    '&:hover .tooltiptext': {
      visibility: show ? 'visible' : 'hidden',
    },
  });
  React.useEffect(() => {
    switch (position) {
      case 'top':
        setComputedPosition({
          top: '-3em',
          left: '0.6em',
        });
        setAfterPosition({
          top: '2.8em',
          right: '6.5em',
          marginTop: '-7.5px',
          transform: 'rotate(270deg)',
        });
        break;
      case 'left':
        setComputedPosition({
          top: '-5px',
          left: '-8.5em',
        });
        setAfterPosition({
          top: '50%',
          right: '-0.86em',
          marginTop: '-5px',
          transform: 'rotate(180deg)',
        });
        break;
      case 'bottom':
        setComputedPosition({
          bottom: '-3.5em',
          left: '0.6em',
        });
        setAfterPosition({
          top: '-0.2em',
          right: '6.5em',
          marginTop: '-7.5px',
          transform: 'rotate(90deg)',
        });
        break;
      case 'right':
        setComputedPosition({
          top: '-5px',
          left: '110%',
        });
        setAfterPosition({
          top: '50%',
          right: '100%',
          marginTop: '-5px',
        });
        break;
      default:
        break;
    }
  }, [position]);
  const computedClassNames = clsx(className);
  return (
    <div css={styles} className={computedClassNames} {...props}>
      {children}
      <span className={`tooltiptext`}>{info}</span>
    </div>
  );
};
export default ToolTip;
