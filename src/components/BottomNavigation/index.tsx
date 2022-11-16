/** @jsxImportSource @emotion/react */

import { Theme } from '../../styles/themes';
import NavigationItem from './NavigationItem';
import { ReactNode, CSSProperties, Children, cloneElement, ReactElement } from 'react';
import { ComponentBaseProps, Themed } from '../props';
import vars from '../../styles/vars';
import { useCSS, useTheme } from '../../styles/css';
type BottomNavigation = ComponentBaseProps & {
  onTap?: (index: number) => void; // Called when one of the items is tapped.
  iconSize?: string; // The size of all of the NavigationItem icons
  labelSize?: string; // The size of all of the NavigationItem labels
  selectedItemColor?: Themed<string>;
  selectedIconColor?: Themed<string>;
  selectedLabelColor?: Themed<string>;
  unselectedIconColor?: Themed<string>;
  unselectedLabelColor?: Themed<string>;
  unselectedItemColor?: Themed<string>;
  backgroundColor?: Themed<string>; // The color of the BottomNavigation itself
  currentIndex?: number; // The index into items for the current active
  selectedIconStyle?: Themed<CSSProperties>; // The size, opacity, and color of the icon in the currently selected NavigationItem.icons.
  selectedItemStyle?: Themed<CSSProperties>; //The style of the selected NavigationItem.icon and NavigationItem.labels. [...]
  selectedLabelStyle?: Themed<CSSProperties>; // The style of the NavigationItem labels when they are selected.
  unselectedIconStyle?: Themed<CSSProperties>; // The size, opacity, and color of the icon in the currently unselected NavigationItem.icons.
  unselectedItemStyle?: Themed<CSSProperties>; //The style of the unselected NavigationItem.icon and NavigationItem.labels. [...]
  unselectedLabelStyle?: Themed<CSSProperties>; // The style of the NavigationItem labels when they are not selected.
  navigationStyle?: Themed<CSSProperties>;
};
/**
 * A component that's displayed at the bottom of an app for selecting 
 * among a small number of views, typically between three and five.
 * The bottom navigation bar consists of multiple items in the form of text labels,icons, 
 * or both It provides quick navigation between the top-level views of an app. 
 * For larger screens, side navigation may be a better fit.
 * 
 * this is an exampe with override lastest item
 * ```js
 *  const [currentIndex, setCurrentIndex] = useState(2);
 *  <BottomNavigation
        currentIndex={currentIndex}
        onTap={i => {
          console.log(i);

          setCurrentIndex(i);
        }}
        selectedLabelStyle={{
          color: 'red',
        }}>
        {item.map((v, i) => (
          <BottomNavigation.Item key={i} label={v + ''} icon={'1212'}>
            {i == 3 && (
              <div
                style={{
                  color: currentIndex == i ? 'red' : 'green',
                }}>
                sdsd
              </div>
            )}
          </BottomNavigation.Item>
        ))}
    </BottomNavigation>
 * ```
 *
 */
const BottomNavigation = ({
  onTap,
  currentIndex = 0,
  iconSize,
  css,
  labelSize,
  selectedItemColor,
  selectedIconColor,
  selectedLabelColor,
  unselectedIconColor,
  unselectedLabelColor,
  unselectedItemColor,
  backgroundColor,
  selectedIconStyle,
  selectedItemStyle,
  selectedLabelStyle,
  unselectedIconStyle,
  unselectedItemStyle,
  unselectedLabelStyle,
  navigationStyle,
  children,
  ...props
}: BottomNavigation) => {
  const theme = useTheme();
  const styles = useCSS({
    display: 'flex',
    minHeight: vars.navigation.height,
    background:
      (backgroundColor && (typeof backgroundColor == 'function' ? backgroundColor(theme) : backgroundColor)) ||
      theme.color.white ||
      'white',
    alignItems: 'center',
    ...(navigationStyle && (typeof navigationStyle == 'function' ? navigationStyle(theme) : navigationStyle)),
  });

  return (
    <ul css={styles} {...props}>
      {Children.map(children, (child, i) => {
        return cloneElement(child as ReactElement, {
          selected: i == currentIndex,
          index: i,
          onTap,
          iconSize,
          labelSize,
          selectedItemColor,
          selectedIconColor,
          selectedLabelColor,
          unselectedIconColor,
          unselectedLabelColor,
          unselectedItemColor,
          selectedIconStyle,
          selectedItemStyle,
          selectedLabelStyle,
          unselectedIconStyle,
          unselectedItemStyle,
          unselectedLabelStyle,
        });
      })}
    </ul>
  );
};

BottomNavigation.Item = NavigationItem;

export default BottomNavigation;
