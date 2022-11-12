/** @jsxImportSource @emotion/react */


import { ReactNode, CSSProperties } from 'react';
import { ComponentBaseProps, Themed } from '../props';
import { useCSS,useTheme } from '../../styles/css';
export type NavigationItemProps = ComponentBaseProps & {
  index?: number;
  onTap?: (index?: number) => void;
  selected?: boolean;
  icon?: ReactNode;
  label?: string;
  activeIcon?: ReactNode;
  iconSize?: string;
  labelSize?: string;
  selectedItemColor?: Themed<string>;
  selectedIconColor?: Themed<string>;
  selectedLabelColor?: Themed<string>;
  unselectedIconColor?: Themed<string>;
  unselectedLabelColor?: Themed<string>;
  unselectedItemColor?: Themed<string>;
  selectedIconStyle?: Themed<CSSProperties>;
  selectedItemStyle?: Themed<CSSProperties>;
  selectedLabelStyle?: Themed<CSSProperties>;
  unselectedIconStyle?: Themed<CSSProperties>;
  unselectedItemStyle?: Themed<CSSProperties>;
  unselectedLabelStyle?: Themed<CSSProperties>;
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
  index,
  css,
  children,
  ...props
}: NavigationItemProps) => {
  const theme = useTheme();
  const styles = useCSS({
    cursor: 'pointer',
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
  const labelStyles = useCSS({
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
  const iconStyles = useCSS({
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

  const handleClickNavigationItem = () => {
    onTap?.(index);
  };
  return (
    <li css={styles} onClick={handleClickNavigationItem} {...props}>
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
