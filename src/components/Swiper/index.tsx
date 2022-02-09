/** @jsxImportSource @emotion/react */

import { css, useTheme } from '@emotion/react';
import clsx from 'clsx';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Theme } from '../../constants/theme';
import { clamp } from '../../utils';
import SwiperItem from './SwiperItem';
type SwipeItem = {
  index: number;
  content: React.ReactNode;
};
type SwiperProps = {
  defaultIndex?: number;
  items: SwipeItem[];
  onChange?: (current: number, distance: number) => any;
  onSwipeStart?: (current: number) => any;
  onSwipeEnd?: (current: number) => any;
  onClick?: (index: number) => any;
  autoPlay?: boolean;
  loop?: boolean;
  delay?: number;
  vertical?: boolean;
  duration?: number;
  indicatorProps?: {
    color?: string;
    show?: boolean;
  };
  stopPropagation?: boolean;
  width?: string;
  offsetX?: number;
  offsetY?: number;
  rubberband?: boolean;
  indicator?: React.ReactNode | ((total: number, current: number) => React.ReactNode);
  className?: string;
  children?: React.ReactNode;
  ref?: React.RefObject<any>;
  fade?: boolean;
};

const Swiper = ({
  fade = false,
  rubberband = true,
  defaultIndex = 0,
  items,
  autoPlay = false,
  vertical = false,
  loop = false,
  delay = 3000,
  onSwipeStart,
  onSwipeEnd,
  onChange,
  onClick,
  indicatorProps,
  indicator,
  className,
  children,
}: SwiperProps) => {
  const theme = useTheme() as Theme;
  const defaultIndicatorProps = {
    color: theme.color.white,
    show: true,
    ...indicatorProps,
  };
  const computeCurrentItems = useCallback(() => {
    return items.length > 1 ? items.slice(-1).concat(items, items.slice(0, 1)) : items;
  }, [items]);

  const ref = useRef(null);
  const [touchResult, setTouchResult] = useState({ clientX: 0, clientY: 0 });
  const [isTouching, setIsTouching] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [boundingInfos, setBoundingInfos] = useState<{ width: number; height: number }>({ width: 0, height: 0 });
  const [translateY, setTranslateY] = useState<string | number>(0);
  const [translateX, setTranslateX] = useState<string | number>(0);

  const styles = css({
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    '& > ul': {
      transform: `${
        typeof translateX != 'string'
          ? `translate3d(${translateX}px,${translateY}px,0)`
          : `translate3d(${translateX},${translateY},0)`
      }`,
    },
  });

  const swipeTo = (index: number) => {
    console.log(index);
  };
  const swipePrev = () => {};
  const swipeNext = () => {};

  useEffect(() => {
    if (autoPlay) {
      const iv = setInterval(() => {}, delay);
      return clearInterval(iv);
    }
  }, []);

  useEffect(() => {
    const swiper = ref.current as any;
    setBoundingInfos(swiper.getBoundingClientRect());
    swiper.swipeTo = swipeTo;
    swiper.swipePrev = swipePrev;
    swiper.swipeNext = swipeNext;
  }, [ref]);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setIsTouching(true);
    setTouchResult(e.touches[e.touches.length - 1]);
    onSwipeStart?.(currentIndex);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const currentTouchResult = e.touches[e.touches.length - 1];
    const diff = currentTouchResult[vertical ? 'clientY' : 'clientX'] - touchResult[vertical ? 'clientY' : 'clientX'];
    const isFirstItem = currentIndex == items[0].index && !loop;
    const isLastItem = currentIndex == items[items.length - 1].index && !loop;
    const currentNeededLength = boundingInfos[vertical ? 'height' : 'width'];
    const currentTranslate = currentIndex * currentNeededLength;
    console.log('currentTranslate', currentTranslate);
    const setTranslateXByDiff = (diffClamped: number) => {
      if (diff < 0) {
        setTranslateX(-currentTranslate + diffClamped);
      } else {
        setTranslateX(currentTranslate + diffClamped);
      }
    };
    if (isFirstItem) {
      const diffClamped = clamp(diff, -currentNeededLength, 0);
      setTranslateXByDiff(diffClamped);
    } else if (isLastItem) {
      const diffClamped = clamp(diff, 0, currentNeededLength);
      setTranslateXByDiff(diffClamped);
    } else setTranslateXByDiff(diff);
    onChange?.(currentIndex, diff);
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    setIsTouching(false);
    const currentTouchResult = e.changedTouches[e.changedTouches.length - 1];
    const diff = currentTouchResult[vertical ? 'clientY' : 'clientX'] - touchResult[vertical ? 'clientY' : 'clientX'];
    const isRightDirection = diff < 0;
    const toggle = Math.abs(diff) >= boundingInfos[vertical ? 'height' : 'width'] / 2;
    const newCurrentIndex = currentIndex + (toggle ? (isRightDirection ? 1 : -1) : 0);
    setCurrentIndex(newCurrentIndex);
    if (vertical) {
      setTranslateY(`${newCurrentIndex * (isRightDirection ? -1 : 1) * 100}%`);
    } else {
      setTranslateX(`${newCurrentIndex * (isRightDirection ? -1 : 1) * 100}%`);
    }

    setTouchResult(currentTouchResult);
    onSwipeEnd?.(currentIndex);
  };
  return (
    <div
      css={styles}
      ref={ref}
      className={clsx(className)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}>
      <ul>{children}</ul>
    </div>
  );
};

Swiper.item = SwiperItem;
export default Swiper;
