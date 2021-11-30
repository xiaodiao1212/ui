/** @jsxImportSource @emotion/react */

import { Theme } from '../../constants/theme';
import React from 'react';
import clsx from 'clsx';
import { useTheme, css } from '@emotion/react';

type ProgressProps = {
  percent?: number;
  backgroundColor?: string;
  color?: string;
  co?: ((theme: Theme) => React.CSSProperties) | React.CSSProperties;
};

const Progress = ({
  percent = 0,
  backgroundColor,
  color,
  className,
  co,
  ...props
}: ProgressProps & React.ComponentPropsWithoutRef<'div'>) => {
  const theme = useTheme() as Theme;
  const styles = css({
    height: '100%',
    backgroundColor:
      backgroundColor || theme ? (theme.mode == 'light' ? theme.color.greyLight : theme.color.grey) : '#F3F4F6',

    '& > .progress-bar': {
      height: '100%',
      width: percent + '%',
      backgroundColor: color || theme?.color?.primary || '#231F9C',
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
