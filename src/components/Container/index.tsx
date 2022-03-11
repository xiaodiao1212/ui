/** @jsxImportSource @emotion/react */

import { Theme } from '../../constants/theme';
import clsx from 'clsx';
import { useTheme, css } from '@emotion/react';
type ContainerProps = {
  mt?: string;
  mb?: string;
  ml?: string;
  mr?: string;
  pb?: string;
  pa?: string;
  ma?: string;
  pt?: string;
  pl?: string;
  pr?: string;
  background?: string;
  color?: string;
  absolute?: boolean;
  relative?: boolean;
  fullHeight?: boolean;
  sticky?: boolean;
  fullScreen?: boolean;
  py?: string;
  px?: string;
  my?: string;
  mx?: string;
  co?: ((theme: Theme) => React.CSSProperties) | React.CSSProperties;
};
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
  background,
  color,
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
    background,
    color,
    ...(sticky && {
      position: 'sticky',
      top: 0,
    }),
    ...(relative && { position: 'relative' }),
    ...(absolute && { position: 'absolute' }),
    ...(typeof co == 'function' ? co(theme) : co),
  });

  return (
    <div css={styles} className={computedClassNames} {...props}>
      {children}
    </div>
  );
};

export default Container;
