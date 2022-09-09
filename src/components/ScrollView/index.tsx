/** @jsxImportSource @emotion/react */

import React from 'react';
import { useCSS, useTheme, useThemedCSS } from '../../styles/css';
import { Theme } from '../../styles/themes';
import { Base } from '../props';
type ScrollViewProps = Base & {
  threshold?: number;
  bottomed?: boolean;
  onScrollToBottom?: () => any;
  ending?: React.ReactNode;
};

const ScrollView = ({
  ending,
  threshold = 40,
  onScrollToBottom,
  bottomed = false,
  css,
  className,
  children,
  ...props
}: ScrollViewProps & React.ComponentPropsWithoutRef<'div'>) => {
  const theme = useTheme() as Theme;
  const styles = useCSS({
    height: '100%',
    overflow: 'auto',
    scrollBehavior: 'smooth',
    overscrollBehavior: 'contain',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
    ...useThemedCSS(theme, css),
  });

  const handleScrollToBottom = () => {
    onScrollToBottom?.();
  };

  const handleScroll = (e: any) => {
    const element = e.target;
    if (element.scrollTop + element.clientHeight + threshold < element.scrollHeight) return;
    handleScrollToBottom();
  };

  return (
    <div css={styles} onScroll={handleScroll} {...props}>
      {children}
      {bottomed && ending}
    </div>
  );
};

export default ScrollView;
