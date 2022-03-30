/** @jsxImportSource @emotion/react */

import { Theme } from '../../styles/themes';
import React from 'react';
import clsx from 'clsx';
import Text from '../Text';
import { useTheme, css, keyframes } from '@emotion/react';

type ProgressProps = {
  radius?: number;
  height?: string;
  percent?: number;
  backgroundColor?: string;
  color?: string;
  animated?: boolean;
  tips?: string;
  text?: string;
  co?: ((theme: Theme) => React.CSSProperties) | React.CSSProperties;
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
  co,
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
  const styles = css({
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
    ...(co && (typeof co == 'function' ? co(theme) : co)),
  });
  const computedClassNames = clsx(className);

  return (
    <div css={styles} role='progressbar' className={computedClassNames} {...props}>
      <div className='progress-bar' />
      {text && (
        <div className='progress-text'>
          <Text size='.8em' dark>
            {text}
          </Text>
        </div>
      )}
      {tips && (
        <div className='progress-tips'>
          <Text size='.8em' dark>
            {tips}
          </Text>
        </div>
      )}
    </div>
  );
};

export default Progress;
