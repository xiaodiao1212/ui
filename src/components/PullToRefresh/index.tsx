/** @jsxImportSource @emotion/react */

import { Theme } from '../../styles/themes';
import React, { useEffect, useState } from 'react';

import { useTheme, css } from '@emotion/react';
import { debounce } from '../../utils';
import { Base } from '../props';

type PullToRefreshProps = Base & {
  threshold?: number;
  pullDelay?: number;
  refreshDelay?: number;
  onPullStart?: () => any;
  onPull?: (pullLength: number) => any;
  onPullEnd?: () => any;
  onRefresh?: (refreshOver: () => any) => any;
};
type RefreshLoadingProps = Base;

const PullToRefresh = ({
  threshold = 80,
  pullDelay = 30,
  refreshDelay = 1000,
  onPull,
  onPullStart,
  onPullEnd,
  onRefresh,
  children,
  co,
  ...props
}: PullToRefreshProps) => {
  const [pullLength, setPullLength] = useState(0);
  const [isRefresh, setIsRefresh] = useState(false);
  const [translateY, setTranslateY] = useState(0);
  const [startY, setStartY] = useState(0);
  const theme = useTheme() as Theme;
  const styles = css({
    height: '100%',
    overflow: 'hidden',
    '& > .refresh-container': {
      transform: `translate3d(0px, ${translateY}px, 0px)`,
      transition: '.3s all cubic-bezier(0, 0, 0.19, 1.25)',
      scrollBehavior: 'smooth',
      height: '100%',
      ...(co && (typeof co == 'function' ? co(theme) : co)),
    },
  });

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setStartY(e.touches[0].pageY);
    onPullStart?.();
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (startY != 0) {
      e.stopPropagation();
      const length = Math.max(0, parseFloat((e.touches[0].clientY - startY).toFixed(2)));
      const pl = Math.min(threshold + pullDelay, length);
      setTranslateY(pl > (pullDelay as number) ? pl - (pullDelay as number) : 0);
      setPullLength(length);
      onPull?.(length);
    }
  };

  const handleReset = () => {
    setStartY(0);
    setTranslateY(0);
    setPullLength(0);
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (pullLength >= threshold + pullDelay) {
      const ty = ((translateY / 1.2).toFixed(2) as any) * 1;
      setTranslateY(ty);
      setIsRefresh(v => !v);
      onRefresh?.(() => {
        setTimeout(() => {
          setIsRefresh(v => !v);
          console.log('Refresh', isRefresh);
        }, refreshDelay);
      });
    } else {
      handleReset();
    }
    onPullEnd?.();
  };

  const handleChildrenRender = () => {
    return React.Children.map(children, (child: any, i) => {
      if (child.type.name == 'RefreshLoading') {
        return React.cloneElement(child as React.DetailedReactHTMLElement<any, HTMLElement>);
      }
      return React.cloneElement(child as React.DetailedReactHTMLElement<any, HTMLElement>, {
        style:
          translateY > 0
            ? {
                overflow: 'hidden',
              }
            : {},
      });
    });
  };

  useEffect(() => {
    if (!isRefresh) {
      handleReset();
    }
  }, [isRefresh]);

  return (
    <div
      css={styles}
      onTouchStart={e => handleTouchStart(e)}
      onTouchMove={e => handleTouchMove(e)}
      onTouchEnd={e => handleTouchEnd(e)}
      {...props}>
      <div className='refresh-container'>{handleChildrenRender()}</div>
    </div>
  );
};

const RefreshLoading = ({ co, children, className }: RefreshLoadingProps) => {
  const theme = useTheme() as Theme;
  const style = css({
    position: 'absolute',
    width: '100%',
    left: 0,
    textAlign: 'center',
    transform: 'translateY(-100%)',
    ...(co && (typeof co == 'function' ? co(theme) : co)),
  });

  return (
    <div css={style} className={className}>
      {children}
    </div>
  );
};

PullToRefresh.Loading = RefreshLoading;
export default PullToRefresh;
