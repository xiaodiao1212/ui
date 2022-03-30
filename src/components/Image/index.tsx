/** @jsxImportSource @emotion/react */

import { Theme } from '../../styles/themes';
import clsx from 'clsx';
import { useTheme, css } from '@emotion/react';
import { useState, ReactNode } from 'react';
// import * as ReactCSS from 'csstype';

type ImageProps = {
  mask?: ReactNode;
  circle?: boolean;
  lazy?: boolean;
  cover?: boolean;
  scale?: boolean;
  contain?: boolean;
  backdropFilter?: string;
  width?: string;
  loadingImg?: ReactNode;
  errorImg?: ReactNode;
  height?: string;
  co?: ((theme: Theme) => React.CSSProperties) | React.CSSProperties;
};
const Image = ({
  circle = false,
  mask,
  lazy = true,
  cover,
  scale,
  contain,
  width = '100%',
  errorImg,
  backdropFilter,
  height,
  co,
  loadingImg,
  className,
  ...props
}: React.ComponentPropsWithoutRef<'img'> & ImageProps) => {
  const theme = useTheme() as Theme;
  const [loadingState, setLoadingState] = useState<'error' | 'success' | 'loading'>('loading');
  const styles = css({
    verticalAlign: 'middle',
    background: 'transparent',
    borderRadius: ((circle as boolean) && '50%') || '',
    objectFit: (cover && 'cover') || (scale && 'scale-down') || (contain && 'contain') || 'initial',
    width: width,
    imageRendering: 'initial',
    imageOrientation: 'initial',
    height: height,
    ...(co && (typeof co == 'function' ? co(theme) : co)),
  });

  const computedClassNames = clsx(className);
  const handleImgError = (e: any) => {
    setLoadingState('error');
  };
  const handleImgLoad = (e: any) => {
    setLoadingState('success');
  };
  const img = (
    <img
      onError={handleImgError}
      onLoad={handleImgLoad}
      css={styles}
      loading={(lazy && 'lazy') || 'eager'}
      className={computedClassNames}
      {...props}
    />
  );

  const renderRightImg = () => {
    return (
      <div
        css={css({
          display: 'inline-flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
        })}>
        {loadingState == 'loading' && loadingImg}
        {loadingState == 'error' ? errorImg : img}
        {loadingState == 'success' && mask && (
          <div
            css={css({
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute',
              inset: 0,
              backdropFilter,
            })}>
            {mask}
          </div>
        )}
      </div>
    );
  };

  return renderRightImg();
};

export default Image;
