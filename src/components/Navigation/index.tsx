/** @jsxImportSource @emotion/react */

import { css, useTheme } from '@emotion/react';
import { Theme } from '../../styles/themes';
import NavigationItem from './NavigationItem';
import { ReactNode, CSSProperties, Children, cloneElement, ReactElement } from 'react';
import { Base } from '../props';
type Navigation = Omit<Base, 'co'> & {
  onTap?: (index: number) => void; // Called when one of the items is tapped.
  iconSize?: string; // The size of all of the NavigationItem icons
  labelSize?: string; // The size of all of the NavigationItem labels
  selectedItemColor?: ((theme: Theme) => string) | string;
  selectedIconColor?: ((theme: Theme) => string) | string;
  selectedLabelColor?: ((theme: Theme) => string) | string;
  unselectedIconColor?: ((theme: Theme) => string) | string;
  unselectedLabelColor?: ((theme: Theme) => string) | string;
  unselectedItemColor?: ((theme: Theme) => string) | string;
  backgroundColor?: ((theme: Theme) => string) | string; // The color of the Navigation itself
  currentIndex?: number; // The index into items for the current active
  selectedIconStyle?: ((theme: Theme) => CSSProperties) | CSSProperties; // The size, opacity, and color of the icon in the currently selected NavigationItem.icons.
  selectedItemStyle?: ((theme: Theme) => CSSProperties) | CSSProperties; //The style of the selected NavigationItem.icon and NavigationItem.labels. [...]
  selectedLabelStyle?: ((theme: Theme) => CSSProperties) | CSSProperties; // The style of the NavigationItem labels when they are selected.
  unselectedIconStyle?: ((theme: Theme) => CSSProperties) | CSSProperties; // The size, opacity, and color of the icon in the currently unselected NavigationItem.icons.
  unselectedItemStyle?: ((theme: Theme) => CSSProperties) | CSSProperties; //The style of the unselected NavigationItem.icon and NavigationItem.labels. [...]
  unselectedLabelStyle?: ((theme: Theme) => CSSProperties) | CSSProperties; // The style of the NavigationItem labels when they are not selected.
  navigationStyle?: ((theme: Theme) => CSSProperties) | CSSProperties;
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
 *  <Navigation
        currentIndex={currentIndex}
        onTap={i => {
          console.log(i);

          setCurrentIndex(i);
        }}
        selectedLabelStyle={{
          color: 'red',
        }}>
        {item.map((v, i) => (
          <Navigation.Item key={i} label={v + ''} icon={'1212'}>
            {i == 3 && (
              <div
                style={{
                  color: currentIndex == i ? 'red' : 'green',
                }}>
                sdsd
              </div>
            )}
          </Navigation.Item>
        ))}
    </Navigation>
 * ```
 *
 */
const Navigation = ({
  onTap,
  currentIndex = 0,
  iconSize,
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
}: Navigation) => {
  const theme = useTheme() as Theme;
  const styles = css({
    display: 'flex',
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

Navigation.Item = NavigationItem;

export default Navigation;
