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
/**
 * The Container widget lets you create a rectangular visual element. A container can be decorated with a Box, such as a background, a border, or a shadow. A Container can also have margins, padding, and constraints applied to its size. In addition, a Container can be transformed in three dimensional space using a matrix.
 * @param param0
 * @returns
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
    ...(typeof co == 'function' ? co(theme) : co),
  });

  return (
    <div css={styles} className={computedClassNames} {...props}>
      {children}
    </div>
  );
};

export default Container;
