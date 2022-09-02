/** @jsxImportSource @emotion/react */

import { keyframes } from '@emotion/react';
import React from 'react';
import { useCSS, useTheme, useFunctionLikeValue } from '../../styles/css';
import { Theme } from '../../styles/themes';
import { Base } from '../props';

type ProgressProps = Base & {
  radius?: number;
  height?: string;
  percent?: number;
  backgroundColor?: string;
  color?: string;
  animated?: boolean;
  tips?: string;
  text?: string;
};

const Progress = ({
  text = '',
  tips = '',
  radius = 999,
  height = '1em',
  percent = 0,
  backgroundColor,
  color,
  animated = false,
  className,
  css,
  ...props
}: ProgressProps & React.ComponentPropsWithoutRef<'div'>) => {
  const theme = useTheme() as Theme;
  const kf = keyframes({
    from: {
      width: '0%',
    },
    to: {
      width: percent + '%',
    },
  });

  const kfText = keyframes({
    from: {
      left: '0%',
    },
    to: {
      left: `calc(${percent}% - ${Math.max(0, text.length - 2.5)}em)`,
    },
  });
  const kfTips = keyframes({
    from: {
      left: '0%',
    },
    to: {
      left: `calc(${percent}% - ${Math.max(0, tips.length / 2)}em)`,
    },
  });
  const styles = useCSS({
    position: 'relative',
    height: height,
    backgroundColor: backgroundColor || theme.color.accent,
    '& > .progress-bar': {
      height: height,
      width: percent + '%',
      backgroundColor: color || theme?.color?.primary || '#5568FE',
      animation: animated ? `${kf} 1.5s` : '',
    },
    '&, &>.progress-bar': {
      borderRadius: radius,
    },
    ...(text.length > 0 && {
      '& > .progress-text': {
        fontSize: '.8rem',
        position: 'absolute',
        left: `calc(${percent}% - ${Math.max(0, text.length - 2.5)}em)`,
        top: 0,
        bottom: 0,
        color: color || theme?.color?.white || '#FEFEFE',
        animation: animated ? `${kfText} 1.5s` : '',
      },
    }),
    ...(tips.length > 0 && {
      '& > .progress-tips': {
        fontSize: '.8rem',
        position: 'absolute',
        left: `calc(${percent}% - ${Math.max(0, tips.length / 2)}em)`,
        animation: animated ? `${kfTips} 1.5s` : '',
        transform: 'translateY(-230%)',
        padding: '2px 16px',
        borderRadius: '4px',
        backgroundColor: color || theme?.color?.primary || '#5568FE',
        color: color || theme?.color?.white || '#FEFEFE',
        '&:before': {
          content: '""',
          width: 0,
          height: 0,
          border: '.6em solid transparent',
          borderTopColor: color || theme?.color?.primary || '#5568FE',
          position: 'absolute',
          bottom: 0,
          transform: 'translateX(5%) translateY(80%)',
        },
      },
    }),
    ...useFunctionLikeValue(theme, css),
  });

  return (
    <div css={styles} role='progressbar' {...props}>
      <div className='progress-bar' />
      {text && <div className='progress-text'>{text}</div>}
      {tips && <div className='progress-tips'>{tips}</div>}
    </div>
  );
};

export default Progress;
