/** @jsxImportSource @emotion/react */

import { useTheme } from '@emotion/react';
import { Theme } from '../../styles/themes';

import { Base } from '../props';
import { useCSS, useFunctionLikeValue } from '../../styles/css';

type AppBarProps = Base & {
  left?: boolean;
  navIcon?: React.ReactNode;
  extra?: React.ReactNode;
  title?: React.ReactNode;
  color?: string;
  gap?: string;
  fixed?: boolean;
  sticky?: boolean;
  children?: React.ReactNode;
};

/**
 * The top app bar provides content and actions related to the current screen.
 * It’s used for branding, screen titles, navigation, and actions.
 * ```
 * <Menu
 *    title='Title'
 *    extra={<Menu onClick={()=>{}}/>}>
 * </Menu>
 * ```
 * @param left weather use the title left layout.
 * @param navIcon some operation icons like arrow,back,memu aligned on the left of the bar.
 * @param extra some extra operation icons aligned on the right of the bar.
 * @param title bar's and page's title aligned on the center of the bar.
 * @param color bar's background color.
 * @param gap the gap of the title,extra,navIcon
 */
const Menu = ({ left, navIcon, extra, title, color, css, gap, children, ...props }: AppBarProps) => {
  const theme = useTheme() as Theme;
  const containerStyles = useCSS({
    backgroundColor: color,
    width: '100%',
    '& > ul': {
      display: 'flex',
      width: '100%',
      gap,
      '& > li:nth-child(1)': {
        flex: left ? 'none' : 1,
      },
      '& > li:nth-child(2)': {
        flex: left ? 'auto' : 1,
        textAlign: left ? 'left' : 'center',
      },
      '& > li:nth-child(3)': {
        flex: 1,
        textAlign: 'right',
      },
    },
    ...useFunctionLikeValue(theme, css),
  });

  return (
    <header css={containerStyles} {...props}>
      <ul>
        <li>{navIcon}</li>
        <li>{title}</li>
        <li>{extra}</li>
      </ul>
      {children}
    </header>
  );
};

export default Menu;
