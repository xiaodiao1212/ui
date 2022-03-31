/** @jsxImportSource @emotion/react */

import { Theme } from '../../styles/themes';
import React from 'react';

import { useTheme, css } from '@emotion/react';
import { Base } from '../props';
type SegmentItemProps = Base &
  Partial<{
    itemkey: React.Key | null | undefined;
    currentKey: React.Key | null | undefined;
    onClickItem: (key: React.Key | null | undefined) => void;
  }>;
const SegmentItem = ({
  itemkey,
  currentKey,
  onClickItem,
  co,
  children,
  ...props
}: React.ComponentPropsWithoutRef<'div'> & SegmentItemProps) => {
  const theme = useTheme() as Theme;
  const styles = css({
    padding: '0 .4em',
    flex: 1,
    textAlign: 'center',
    color: itemkey == currentKey ? theme.color.primary : theme.color.grey,
    transition: '.3s all',
    fontWeight: itemkey == currentKey ? 700 : 500,
    ...(co && (typeof co == 'function' ? co(theme) : co)),
  });

  const handleClickSegmentItem = () => {
    onClickItem?.(itemkey);
  };

  return (
    <div css={styles} {...props} onClick={handleClickSegmentItem}>
      {children}
    </div>
  );
};

export default SegmentItem;
