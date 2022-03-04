/** @jsxImportSource @emotion/react */

import clsx from 'clsx';
import { css, useTheme } from '@emotion/react';
import { Theme } from '../../constants/theme';
import { ReactNode, CSSProperties } from 'react';

export type NavigationItemProps = {
  index?: number;
  onTap?: (index?: number) => void;
  selected?: boolean;
  icon?: ReactNode;
  label?: string;
  activeIcon?: ReactNode;
  iconSize?: string;
  labelSize?: string;
  selectedItemColor?: ((theme: Theme) => string) | string;
  selectedIconColor?: ((theme: Theme) => string) | string;
  selectedLabelColor?: ((theme: Theme) => string) | string;
  unselectedIconColor?: ((theme: Theme) => string) | string;
  unselectedLabelColor?: ((theme: Theme) => string) | string;
  unselectedItemColor?: ((theme: Theme) => string) | string;
  selectedIconStyle?: ((theme: Theme) => CSSProperties) | CSSProperties;
  selectedItemStyle?: ((theme: Theme) => CSSProperties) | CSSProperties;
  selectedLabelStyle?: ((theme: Theme) => CSSProperties) | CSSProperties;
  unselectedIconStyle?: ((theme: Theme) => CSSProperties) | CSSProperties;
  unselectedItemStyle?: ((theme: Theme) => CSSProperties) | CSSProperties;
  unselectedLabelStyle?: ((theme: Theme) => CSSProperties) | CSSProperties;
  children?: ReactNode;
  className?: string;
};

const NavigationItem = ({
  icon,
  label,
  selected = false,
  activeIcon,
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
  onTap,
  className,
  index,
  children,
}: NavigationItemProps) => {
  const theme = useTheme() as Theme;
  const styles = css({
    display: 'flex',
    alignItems: 'center',
    flex: 'auto',
    flexDirection: 'column',
    color: selected
      ? typeof selectedItemColor == 'function'
        ? selectedItemColor(theme)
        : selectedItemColor
      : typeof unselectedItemColor == 'function'
      ? unselectedItemColor(theme)
      : unselectedItemColor,
    ...(selected
      ? typeof selectedItemStyle == 'function'
        ? selectedItemStyle(theme)
        : selectedItemStyle
      : typeof unselectedItemStyle == 'function'
      ? unselectedItemStyle(theme)
      : unselectedItemStyle),
  });
  const labelStyles = css({
    fontSize: labelSize,
    color: selected
      ? typeof selectedLabelColor == 'function'
        ? selectedLabelColor(theme)
        : selectedLabelColor
      : typeof unselectedLabelColor == 'function'
      ? unselectedLabelColor(theme)
      : unselectedLabelColor,
    ...(selected
      ? typeof selectedLabelStyle == 'function'
        ? selectedLabelStyle(theme)
        : selectedLabelStyle
      : typeof unselectedLabelStyle == 'function'
      ? unselectedLabelStyle(theme)
      : unselectedLabelStyle),
  });
  const iconStyles = css({
    fontSize: iconSize,
    color: selected
      ? typeof selectedIconColor == 'function'
        ? selectedIconColor(theme)
        : selectedIconColor
      : typeof unselectedIconColor == 'function'
      ? unselectedIconColor(theme)
      : unselectedIconColor,
    ...(selected
      ? typeof selectedIconStyle == 'function'
        ? selectedIconStyle(theme)
        : selectedIconStyle
      : typeof unselectedIconStyle == 'function'
      ? unselectedIconStyle(theme)
      : unselectedIconStyle),
  });
  const computedClassNames = clsx(className);
  const handleClickNavigationItem = () => {
    onTap?.(index);
  };
  return (
    <li css={styles} className={computedClassNames} onClick={handleClickNavigationItem}>
      {children || (
        <>
          <div css={iconStyles}>{selected ? activeIcon || icon : icon}</div>
          <div css={labelStyles}>{label}</div>
        </>
      )}
    </li>
  );
};
export default NavigationItem;
