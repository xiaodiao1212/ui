/** @jsxImportSource @emotion/react */

import { Theme } from '../../constants/theme';
import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { useTheme, css } from '@emotion/react';
type ScrollViewProps = {
  triggerValue?: number;
  onScrollToBottom?: (handleScrollToBottomOver: () => any) => any;
  fetchNode?: React.ReactNode;
  co?: ((theme: Theme) => React.CSSProperties) | React.CSSProperties;
};

const ScrollView = ({
  fetchNode,
  triggerValue = 40,
  onScrollToBottom,
  co,
  className,
  children,
  ...props
}: ScrollViewProps & React.ComponentPropsWithoutRef<'div'>) => {
  const theme = useTheme() as Theme;
  const styles = css({
    height: '100%',
    overflow: 'auto',
    scrollBehavior: 'smooth',
    overscrollBehavior: 'contain',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
    ...(co && (typeof co == 'function' ? co(theme) : co)),
  });
  const computedClassNames = clsx(className);
  const [scrollTop, setScrollTop] = useState(0);
  const [isTouch, setIsTouch] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const handleScrollToBottomOver = () => {
    setIsFetching(false);
  };

  const handleScrollToBottom = () => {
    onScrollToBottom?.(handleScrollToBottomOver);
  };

  const handleScroll = (e: any) => {
    const element = e.target;
    setScrollTop(element.scrollTop);
    if (element.scrollTop + element.clientHeight + triggerValue < element.scrollHeight || isFetching) return;
    setIsFetching(true);
  };
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setIsTouch(true);
  };
  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (scrollTop > 0 && isTouch) e.stopPropagation();
  };
  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    setIsTouch(false);
  };
  useEffect(() => {
    if (!isFetching) return;
    handleScrollToBottom();
  }, [isFetching]);

  return (
    <div
      css={styles}
      onScroll={handleScroll}
      onTouchStart={e => handleTouchStart(e)}
      onTouchMove={e => handleTouchMove(e)}
      onTouchEnd={e => handleTouchEnd(e)}
      className={computedClassNames}
      {...props}>
      {children}
      {isFetching && fetchNode}
    </div>
  );
};

export default ScrollView;
