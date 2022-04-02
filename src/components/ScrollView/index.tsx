/** @jsxImportSource @emotion/react */

import { Theme } from '../../styles/themes';
import React, { useEffect, useState } from 'react';

import { useTheme, css } from '@emotion/react';
import { Base } from '../props';
type ScrollViewProps = Base & {
  triggerValue?: number;
  onScrollToBottom?: (handleScrollToBottomOver: () => any) => any;
  fetchNode?: React.ReactNode;
};

/**
 *
 * 滚动视图允许用户浏览大于可见区域的内容，例如文档中的文本或图像集合。
 * 当人们滑动、轻拂、拖动、点击和捏合时，滚动视图会跟随手势，以一种感觉自然的方式显示或缩放内容。
 * 滚动视图本身没有外观，但会在人们与之交互时显示瞬态滚动指示器。
 * 滚动视图也可以配置为在分页模式下运行，滚动显示全新的内容页面，而不是在当前页面中移动。
 * @param param0
 * @returns
 */
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
      {...props}>
      {children}
      {isFetching && fetchNode}
    </div>
  );
};

export default ScrollView;
