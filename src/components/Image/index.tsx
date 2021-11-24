/** @jsxImportSource @emotion/react */

import { Theme } from '../../constants/theme';
import clsx from 'clsx';
import { useTheme, css } from '@emotion/react';
import * as ReactCSS from 'csstype';

type ImageProps = {
  circle?: boolean;
  fit?: ReactCSS.Property.ObjectFit;
  width?: string;
  height?: string;
  co?: ((theme: Theme) => React.CSSProperties) | React.CSSProperties;
};
const Image = ({
  circle = false,
  src,
  alt,
  fit,
  width = '100%',
  height = 'auto',
  co,
  className,
  ...props
}: React.ComponentPropsWithoutRef<'img'> & ImageProps) => {
  const theme = useTheme() as Theme;
  const styles = css({
    verticalAlign: 'middle',
    background: 'transparent',
    borderRadius: ((circle as boolean) && '50%') || undefined,
    objectFit: fit || undefined,
    width: width || undefined,
    height: height || '100%',
    ...(typeof co == 'function' && co(theme)),
  });
  const computedClassNames = clsx(className);
  return <img src={src} alt={alt} css={styles} className={computedClassNames} />;
};

export default Image;
