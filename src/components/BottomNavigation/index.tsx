/** @jsxImportSource @emotion/react */

import * as React from 'react';
import clsx from 'clsx';
import { css, useTheme } from '@emotion/react';
import { Theme } from '../../constants/theme';
import BottomNavigationItem from './BottomNavigationItem';

type BottomNavigation = {
  onTap?: (index: number) => void; // Called when one of the items is tapped.
  iconSize?: string; // The size of all of the BottomNavigationItem icons
  selectedItemColor?: string; // The value of selectedItemColor
  backgroundColor?: string; // The color of the BottomNavigation itself
  currentIndex?: number; // The index into items for the current active
  selectedFontSize?: string; // The font size of the BottomNavigationItem labels when they are selected.
  selectedIconStyle?: ((theme: Theme) => React.CSSProperties) | React.CSSProperties; // The size, opacity, and color of the icon in the currently selected BottomNavigationItem.icon.
  selectedLabelStyle?: ((theme: Theme) => React.CSSProperties) | React.CSSProperties; // The TextStyle of the BottomNavigationItem labels when they are selected.
  showSelectedLabels?: boolean; // Whether the labels are shown for the selected BottomNavigationItem.
  showUnSelectedLabels?: boolean; // Whether the labels are shown for the unselected BottomNavigationItems.
  unselectedFontSize?: string; // The font size of the BottomNavigationItem labels when they are not selected.
  unselectedIconStyle?: ((theme: Theme) => React.CSSProperties) | React.CSSProperties; // The size, opacity, and color of the icon in the currently unselected BottomNavigationItem.icons.
  unselectedItemColor?: string; //The color of the unselected BottomNavigationItem.icon and BottomNavigationItem.labels. [...]
  unselectedLabelStyle?: ((theme: Theme) => React.CSSProperties) | React.CSSProperties; // The TextStyle of the BottomNavigationItem labels when they are not selected.
  children?: React.ReactNode;
  className?: string;
  co?: ((theme: Theme) => React.CSSProperties) | React.CSSProperties;
};
/**
 * A component that's displayed at the bottom of an app for selecting among a small number of views, typically between three and five.The bottom navigation bar consists of multiple items in the form of text labels, icons, or both It provides quick navigation between the top-level views of an app. For larger screens, side navigation may be a better fit.
 */
const BottomNavigation = ({
  iconSize,
  selectedItemColor,
  backgroundColor,
  selectedFontSize,
  selectedIconStyle,
  selectedLabelStyle,
  showSelectedLabels,
  showUnSelectedLabels,
  unselectedFontSize,
  unselectedItemColor,
  unselectedLabelStyle,
  onTap,
  currentIndex = 0,
  co,
  children,
  className,
}: BottomNavigation) => {
  const theme = useTheme() as Theme;
  const styles = css({
    position: 'sticky',
    top: '100vh',
    display: 'flex',
    alignItems: 'center',
    ...(co && (typeof co == 'function' ? co(theme) : co)),
  });
  const computedClassNames = clsx(className);
  return (
    <footer css={styles} className={computedClassNames}>
      {React.Children.map(children, (child, i) => {
        return React.cloneElement(child as React.ReactElement, {
          current: i == currentIndex,
          index: i,
          onTap,
        });
      })}
    </footer>
  );
};

BottomNavigation.item = BottomNavigationItem;

export default BottomNavigation;
