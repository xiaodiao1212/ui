/** @jsxImportSource @emotion/react */

import clsx from 'clsx';
import { css, useTheme } from '@emotion/react';
import { Theme } from '../../constants/theme';
import * as React from 'react';
type IconThemeData = {};
export type BottomNavigationBarItem = {
  icon?: React.ReactNode; //The icon of the item.
  label?: string; // The text label for this BottomNavigationBarItem.
  activeIcon?: React.ReactNode; // An alternative icon displayed when this bottom navigation item is selected.
  tooltip?: string; // The text to display in the tooltip for this BottomNavigationBarItem, when the user long presses the item.
  children?: React.ReactNode;
  className?: string;
  co?: ((theme: Theme) => React.CSSProperties) | React.CSSProperties;
};
/**
 * An interactive button within either material's BottomNavigationBar or the iOS themed CupertinoTabBar with an icon and title.
 * This class is rarely used in isolation. It is typically embedded in one of the bottom navigation component above.
 */
const BottomNavigationBarItem = ({ co, children, className, ...props }: BottomNavigationBarItem) => {
  const theme = useTheme() as Theme;
  const styles = css({
    ...(co && (typeof co == 'function' ? co(theme) : co)),
  });
  const computedClassNames = clsx(className);
  return (
    <div css={styles} className={computedClassNames} {...props}>
      {children}
    </div>
  );
};
export default BottomNavigationBarItem;
