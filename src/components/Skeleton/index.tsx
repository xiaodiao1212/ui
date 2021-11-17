/** @jsxImportSource @emotion/react */

import { Theme } from '../../constants/theme';
import React from 'react';
import clsx from 'clsx';
import { useTheme, css, keyframes } from '@emotion/react';
type SkeletonProps = {
  duration?: number;
  delay?: number;
  circle?: boolean;
  width?: string;
  height?: string;
  co?: ((theme: Theme) => React.CSSProperties) | React.CSSProperties;
};

const anim = keyframes`
  to: {
    backgroundPositionX: '-20%',
  }
`;
const Skeleton = ({
  duration = 1,
  delay = 0,
  circle = false,
  co,
  width,
  height = '100%',
  className,
  ...props
}: SkeletonProps & React.ComponentPropsWithoutRef<'div'>) => {
  const theme = useTheme() as Theme;
  const computedClassNames = clsx(className);
  const styles = css({
    width: width,
    height: height,
    borderRadius: circle ? '50%' : '4px',
    background:
      'linear-gradient(90deg,rgba(255, 255, 255, 0) 40%,rgba(255, 255, 255, .5) 50%,rgba(255, 255, 255, 0) 60%) ' +
      theme
        ? theme.mode == 'light'
          ? theme.color.greyLight
          : theme.color.grey
        : '#F3F4F6',
    backgroundSize: '200% 100%',
    backgroundPositionX: '180%',
    animation: `${anim} ${duration}s ${delay}s ease-in-out infinite`,
    ...(typeof co == 'function' && co(theme)),
  });
  return <div css={styles} aria-label='skeleton' className={computedClassNames} {...props} />;
};

export default Skeleton;
