/** @jsxImportSource @emotion/react */

import { Theme } from '../../constants/theme';
import React from 'react';
import clsx from 'clsx';
import { useTheme, css } from '@emotion/react';
type SegmentItemProps = Partial<{
  itemkey: React.Key | null | undefined;
  currentKey: React.Key | null | undefined;
  onClickItem: (key: React.Key | null | undefined) => void;
  co?: ((theme: Theme) => React.CSSProperties) | React.CSSProperties;
}>;
const SegmentItem = ({
  itemkey,
  currentKey,
  onClickItem,
  co,
  children,
  className,
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

  const computedClassNames = clsx(className);

  const handleClickSegmentItem = () => {
    onClickItem?.(itemkey);
  };

  return (
    <div css={styles} className={computedClassNames} onClick={handleClickSegmentItem}>
      {children}
    </div>
  );
};

export default SegmentItem;
