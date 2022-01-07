/** @jsxImportSource @emotion/react */

import { Theme } from '../../constants/theme';
import clsx from 'clsx';
import { useTheme, css } from '@emotion/react';
import { useEffect, useState } from 'react';
type ContainerProps = {
  noPadding?: boolean;
  padding?: string;
  noYPadding?: boolean;
  noXPadding?: boolean;
  absolute?: boolean;
  relative?: boolean;
  fullHeight?: boolean;
  sticky?: boolean;
  fullScreen?: boolean;
  co?: ((theme: Theme) => React.CSSProperties) | React.CSSProperties;
};
const Container = ({
  noPadding = false,
  noYPadding = false,
  noXPadding = false,
  padding = '1em',
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
  const [computedPadding, setComputedPadding] = useState(padding);
  const theme = useTheme() as Theme;
  const computedClassNames = clsx(className);
  const styles = css({
    height: fullScreen ? '100vh' : fullHeight ? '100%' : 'auto',
    padding: computedPadding,
    ...(sticky && {
      position: 'sticky',
      top: 0,
    }),
    ...(relative && { position: 'relative' }),
    ...(absolute && { position: 'absolute' }),
    ...(typeof co == 'function' ? co(theme) : co),
  });

  useEffect(() => {
    if (noPadding) setComputedPadding('');
    else if (noYPadding) setComputedPadding('0 ' + padding);
    else if (noXPadding) setComputedPadding(padding + ' 0');
    else setComputedPadding(padding);
  }, [noPadding, noYPadding, noXPadding, padding]);

  return (
    <div css={styles} className={computedClassNames} {...props}>
      {children}
    </div>
  );
};

export default Container;
