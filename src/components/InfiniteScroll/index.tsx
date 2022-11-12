/** @jsxImportSource @emotion/react */

import React from 'react';
import { useCSS, useTheme, useThemedCSS } from '../../styles/css';
import { Theme } from '../../styles/themes';
import { ComponentBaseProps } from '../props';
type InfiniteScrollProps = ComponentBaseProps & {
  threshold?: number;
  bottomed?: boolean;
  onScrollToBottom?: () => any;
  ending?: React.ReactNode;
};
/**
 * Refresher provides pull-to-refresh functionality on a content component. 
 * The pull-to-refresh pattern lets a user pull down on a list of data in order to retrieve more data.
 * ```js
 *  <Refresher onRefresh={()=>{}}>
      <Refresher.Content>
        <Container>hello</Container>
      </Refresher.Content>
    </Refresher>
 * ```
 * @param threshold load trigger value
 * @param ending bottom ending component
 * @param onScrollToBottom scroll to bottom handler
 * @param bottomed arrived or not bottom
 */
const InfiniteScroll = ({
  ending,
  threshold = 40,
  onScrollToBottom,
  bottomed = false,
  css,
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<'div'> & InfiniteScrollProps) => {
  const theme = useTheme();
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

export default InfiniteScroll;
