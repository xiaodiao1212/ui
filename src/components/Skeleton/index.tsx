/** @jsxImportSource @emotion/react */

import { Theme } from '../../styles/themes';
import React from 'react';

import { useTheme, css, keyframes } from '@emotion/react';
import { Base } from '../props';
type SkeletonProps = Base & {
  duration?: number;
  delay?: number;
  circle?: boolean;
  rect?: boolean;
  text?: boolean;
  width?: string;
  height?: string;
};

const Skeleton = ({
  duration = 1,
  delay = 0,
  circle = false,
  rect = false,
  text = false,
  co,
  width,
  height = '100%',
  ...props
}: SkeletonProps & React.ComponentPropsWithoutRef<'div'>) => {
  const theme = useTheme() as Theme;

  const anim = keyframes({
    to: {
      backgroundPositionX: '-20%',
    },
  });

  const styles = css({
    width: width,
    height: height,
    borderRadius: circle ? '50%' : '4px',
    background: `linear-gradient(90deg,rgba(255, 255, 255, 0) 40%,rgba(255, 255, 255, .5) 50%,rgba(255, 255, 255, 0) 60%) ${
      theme.color.greyLight || '#F3F4F6'
    }`,
    backgroundSize: '200% 100%',
    backgroundPositionX: '180%',
    animation: `${anim} ${duration}s ${delay}s ease-in-out infinite`,
    ...(typeof co == 'function' ? co?.(theme) : co),
  });
  return <div css={styles} {...props} />;
};

export default Skeleton;
