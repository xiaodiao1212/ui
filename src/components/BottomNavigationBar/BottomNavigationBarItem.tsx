/** @jsxImportSource @emotion/react */

import clsx from 'clsx';
import { css, useTheme } from '@emotion/react';
import { Theme } from '../../constants/theme';
import * as React from 'react';
export type BottomNavigationItemProps = {
  index?: number;
  onTap?: (index?: number) => void; // Called when one of the items is tapped.
  current?: boolean; // Weather the item is current active
  icon?: React.ReactNode; // The icon of the item.
  label?: string; // The text label for this BottomNavigationItem.
  activeIcon?: React.ReactNode; // An alternative icon displayed when this bottom navigation item is selected.
  children?: React.ReactNode;
  className?: string;
  co?: ((theme: Theme) => React.CSSProperties) | React.CSSProperties;
};
/**
 * An interactive button within either material's BottomNavigationBar or the iOS themed CupertinoTabBar with an icon and title.
 * This class is rarely used in isolation. It is typically embedded in one of the bottom navigation component above.
 */
const BottomNavigationItem = ({
  icon,
  label,
  current = false,
  activeIcon,
  co,
  onTap,
  className,
  index,
  children,
}: BottomNavigationItemProps) => {
  const theme = useTheme() as Theme;
  const styles = css({
    display: 'flex',
    alignItems: 'center',
    flex: 'auto',
    flexDirection: 'column',
    ...(co && (typeof co == 'function' ? co(theme) : co)),
  });
  const computedClassNames = clsx(className);
  const handleClickBottomNavigationItem = () => {
    onTap?.(index);
  };
  return (
    <div css={styles} className={computedClassNames} onClick={handleClickBottomNavigationItem}>
      {children || (
        <>
          <div>{current ? activeIcon : icon}</div>
          <div>{label}</div>
        </>
      )}
    </div>
  );
};
export default BottomNavigationItem;
