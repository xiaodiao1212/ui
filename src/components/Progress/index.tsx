/** @jsxImportSource @emotion/react */

import { Theme } from '../../constants/theme';
import React from 'react';
import clsx from 'clsx';
import Text from '../Text';
import { useTheme, css } from '@emotion/react';

type ProgressProps = {
  circle?: boolean;
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
  circle = true,
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
  const styles = css({
    position: 'relative',
    height: height,
    backgroundColor: backgroundColor || theme ? theme.color.accent : '#F3F4F6',
    '& > .progress-bar': {
      height: height,
      width: percent + '%',
      backgroundColor: color || theme?.color?.primary || '#5568FE',
    },
    '&, &>.progress-bar': {
      borderRadius: circle ? '50px' : '',
    },
    ...(text.length > 0 && {
      '& > .progress-text': {
        position: 'absolute',
        left: `calc(${percent}% - ${Math.max(0, text.length - 2.5)}em)`,
        top: 0,
        bottom: 0,
        color: color || theme?.color?.white || '#FEFEFE',
      },
    }),
    ...(tips.length > 0 && {
      '& > .progress-tips': {
        position: 'absolute',
        left: `calc(${percent}% - ${Math.max(0, tips.length / 2)}em)`,
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
    ...(typeof co == 'function' ? co(theme) : co),
  });
  const computedClassNames = clsx(className);

  return (
    <div css={styles} aria-label='progress' role='progressbar' className={computedClassNames} {...props}>
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
