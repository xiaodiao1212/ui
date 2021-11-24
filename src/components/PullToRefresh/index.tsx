/** @jsxImportSource @emotion/react */

import { Theme } from '../../constants/theme';
import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { useTheme, css } from '@emotion/react';
import { debounce } from '../../utils';

type PullToRefreshProps = {
  triggerValue?: number;
  delay?: number;
  onPullStart?: () => any;
  onPull?: (pullLength: number) => any;
  onPullEnd?: () => any;
  onRefresh?: (refreshOver: () => any) => any;
  co?: ((theme: Theme) => React.CSSProperties) | React.CSSProperties;
};
type RefreshLoadingProps = {
  children?: React.ReactNode;
  className?: string;
  co?: ((theme: Theme) => React.CSSProperties) | React.CSSProperties;
};

const PullToRefresh = ({
  triggerValue = 80,
  delay = 30,
  onPull,
  onPullStart,
  onPullEnd,
  onRefresh,
  className,
  children,
  co,
  ...props
}: React.ComponentPropsWithoutRef<'div'> & PullToRefreshProps) => {
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
      height: '100%',
      ...(typeof co == 'function' && co(theme)),
    },
  });
  const computedRefreshClassNames = clsx(className);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setStartY(e.touches[0].pageY);
    onPullStart?.();
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (startY != 0) {
      e.stopPropagation();
      debounce(() => {
        const length = Math.max(0, parseFloat((e.touches[0].clientY - startY).toFixed(2)));
        const pl = Math.min(triggerValue + delay, length);
        setTranslateY(pl > (delay as number) ? pl - (delay as number) : 0);
        setPullLength(length);
        onPull?.(length);
      }, 2);
    }
  };

  const handleReset = () => {
    setStartY(0);
    setTranslateY(0);
    setPullLength(0);
  };

  const handleTouchEnd = () => {
    onPullEnd?.();
    if (pullLength >= triggerValue + delay) {
      const ty = ((translateY / 1.2).toFixed(2) as any) * 1;
      setTranslateY(ty);
      setIsRefresh(true);
      onRefresh?.(() => setIsRefresh(false));
    } else {
      handleReset();
    }
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
      aria-label='pull-to-refresh'
      className={computedRefreshClassNames}
      onTouchStart={e => handleTouchStart(e)}
      onTouchMove={e => handleTouchMove(e)}
      onTouchEnd={e => handleTouchEnd()}
      {...props}>
      <div aria-label='pull-to-refresh container' className='refresh-container'>
        {handleChildrenRender()}
      </div>
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
    ...(typeof co == 'function' && co(theme)),
  });
  const computedLoadingClassNames = clsx(className);
  return (
    <div aria-label='pull-to-refresh loading' className={computedLoadingClassNames}>
      {children}
    </div>
  );
};

PullToRefresh.Loading = RefreshLoading;
export default PullToRefresh;
