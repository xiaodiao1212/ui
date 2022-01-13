/** @jsxImportSource @emotion/react */

import { Theme } from '../../constants/theme';
import clsx from 'clsx';
import { useTheme, css } from '@emotion/react';
// import * as ReactCSS from 'csstype';

type ImageProps = {
  circle?: boolean;
  // fit?: ReactCSS.Property.ObjectFit;
  lazy?: boolean;
  cover?: boolean;
  scale?: boolean;
  contain?: boolean;
  width?: string;
  height?: string;
  co?: ((theme: Theme) => React.CSSProperties) | React.CSSProperties;
};
const Image = ({
  circle = false,
  lazy,
  cover,
  scale,
  contain,
  width = '100%',
  height,
  co,
  className,
  ...props
}: React.ComponentPropsWithoutRef<'img'> & ImageProps) => {
  const theme = useTheme() as Theme;
  const styles = css({
    verticalAlign: 'middle',
    background: 'transparent',
    borderRadius: ((circle as boolean) && '50%') || '',
    objectFit: (cover && 'cover') || (scale && 'scale-down') || (contain && 'contain') || 'initial',
    width: width,
    imageRendering: 'initial',
    imageOrientation: 'initial',
    height: height,
    ...(typeof co == 'function' ? co(theme) : co),
  });
  const computedClassNames = clsx(className);
  return <img css={styles} loading={(lazy && 'lazy') || 'eager'} className={computedClassNames} {...props} />;
};

export default Image;
