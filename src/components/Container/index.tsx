/** @jsxImportSource @emotion/react */

import { Theme, Margin, Padding } from '../../constants/theme';
import clsx from 'clsx';
import { useTheme, css } from '@emotion/react';
type ContainerProps = {
  absolute?: boolean;
  relative?: boolean;
  fullHeight?: boolean;
  sticky?: boolean;
  fullScreen?: boolean;
  co?: ((theme: Theme) => React.CSSProperties) | React.CSSProperties;
} & Margin &
  Padding;
/**
 * 一个方便的小部件，它结合了常见的绘画、定位和调整大小的小部件。
 */
const Container = ({
  mt,
  mb,
  ml,
  mr,
  pb,
  pa,
  ma,
  pt,
  pl,
  pr,
  py,
  px,
  my,
  mx,
  absolute = false,
  fullHeight = false,
  relative = false,
  fullScreen = false,
  sticky = false,
  co,
  className,
  children,
  ...props
}: ContainerProps & React.ComponentPropsWithoutRef<'div'>) => {
  const theme = useTheme() as Theme;
  const computedClassNames = clsx(className);
  const styles = css({
    height: fullScreen ? '100vh' : fullHeight ? '100%' : 'auto',
    padding: pa,
    margin: ma,
    marginTop: mt || my,
    marginBottom: mb || my,
    marginLeft: ml || mx,
    marginRight: mr || mx,
    paddingTop: pt || py,
    paddingBottom: pb || py,
    paddingLeft: pl || px,
    paddingRight: pr || px,
    ...(sticky && {
      position: 'sticky',
      top: 0,
    }),
    ...(relative && { position: 'relative' }),
    ...(absolute && { position: 'absolute' }),
    ...(co && (typeof co == 'function' ? co(theme) : co)),
  });

  return (
    <div css={styles} className={computedClassNames} {...props}>
      {children}
    </div>
  );
};

export default Container;
