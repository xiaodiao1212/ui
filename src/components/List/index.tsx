/** @jsxImportSource @emotion/react */
import clsx from 'clsx';
import { css, keyframes, useTheme } from '@emotion/react';
import { Theme } from '../../constants/theme';
import * as React from 'react';
import { useState } from 'react';

type ListProps = {
  co?: ((theme: Theme) => React.CSSProperties) | React.CSSProperties;
};

type ListItemProps = {
  swipe?: boolean;
  onSwipe?: () => any;
  onSwipeStart?: () => any;
  onSwipeEnd?: () => any;
  rightContent?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
  co?: ((theme: Theme) => React.CSSProperties) | React.CSSProperties;
};

const List = ({ co, className, children, ...props }: ListProps & React.ComponentPropsWithoutRef<'section'>) => {
  const theme = useTheme() as Theme;
  const styles = css({
    overflow: 'hidden',
    ...(typeof co == 'function' ? co(theme) : co),
  });
  const computedClassNames = clsx(className);

  return (
    <section css={styles} aria-label='list' role='list' className={computedClassNames} {...props}>
      {children}
    </section>
  );
};

const ListItem = ({
  swipe,
  onSwipeStart,
  rightContent,
  onSwipe,
  onSwipeEnd,
  children,
  className,
  co,
}: ListItemProps) => {
  const [swipeLength, setSwipeLength] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [startX, setStartX] = useState(0);
  const theme = useTheme() as Theme;
  const styles = css({
    position: 'relative',
    transform: `translate3d(-${translateX}px,0,0)`,
    transition: 'transform 0.1s cubic-bezier(0.4, 0, 1, 1) 0s',
    ...(typeof co == 'function' ? co(theme) : co),
    '& > :nth-child(2)': {
      position: 'absolute',
      top: 0,
      right: 0,
      transform: 'translate3d(100%,0,0)',
    },
  });
  const rightContentRef = React.useRef<any>({});
  const computedClassNames = clsx(className);
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setStartX(e.touches[0].pageX);
    onSwipeStart?.();
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    length = Math.max(0, parseFloat((startX - e.touches[0].clientX).toFixed(2)));
    const sl = Math.min(length, rightContentRef.current.clientWidth);
    setSwipeLength(sl);
    setTranslateX(sl);
    onSwipe?.();
  };
  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (swipeLength > rightContentRef.current.clientWidth / 2) {
      setTranslateX(rightContentRef.current.clientWidth);
    } else {
      setTranslateX(0);
    }
    setSwipeLength(0);
    onSwipeEnd?.();
  };

  const renderRightContent = () => {
    console.log(
      React.cloneElement(rightContent as React.DetailedReactHTMLElement<any, HTMLElement>, {
        ref: rightContentRef,
      }),
    );
  };

  const props = {
    onTouchStart: handleTouchStart,
    onTouchMove: handleTouchMove,
    onTouchEnd: handleTouchEnd,
  };
  return (
    <div css={styles} aria-label='list item' role='listitem' {...(swipe ? props : {})} className={computedClassNames}>
      {children}
      {rightContent && renderRightContent()}
    </div>
  );
};
List.Item = ListItem;
export default List;
