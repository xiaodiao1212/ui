/** @jsxImportSource @emotion/react */

import { Theme } from '../../constants/theme';
import React from 'react';
import clsx from 'clsx';
import { useTheme, css } from '@emotion/react';

type ProgressProps = {
  circle?: boolean;
  height?: string;
  percent?: number;
  backgroundColor?: string;
  color?: string;
  animated?: boolean;
  co?: ((theme: Theme) => React.CSSProperties) | React.CSSProperties;
};

const Progress = ({
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
    height: height,
    backgroundColor: backgroundColor || theme ? theme.color.accent : '#F3F4F6',
    '& > .progress-bar': {
      height: '100%',
      width: percent + '%',
      backgroundColor: color || theme?.color?.primary || '#231F9C',
    },

    '&,&>.progress-bar': {
      borderRadius: circle ? '50px' : '',
    },
    ...(typeof co == 'function' ? co(theme) : co),
  });
  const computedClassNames = clsx(className);
  return (
    <div css={styles} aria-label='progress' role='progressbar' className={computedClassNames} {...props}>
      <div className='progress-bar' />
    </div>
  );
};

export default Progress;
