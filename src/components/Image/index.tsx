/** @jsxImportSource @emotion/react */

import { Theme } from '../../styles/themes';
import { useTheme, css } from '@emotion/react';
import { useState, ReactNode, useLayoutEffect, useRef, ReactEventHandler, SyntheticEvent } from 'react';
import { Base } from '../props';

type ImageProps = Base & {
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
  onError?: ReactEventHandler<HTMLImageElement>;
  onLoad?: ReactEventHandler<HTMLImageElement>;
  height?: string;
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
  onError,
  onLoad,
  co,
  loadingImg,
  ...props
}: Omit<React.ComponentPropsWithoutRef<'img'>, 'onLoad' | 'onError'> & ImageProps) => {
  const ref = useRef(null);
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

  const handleImgLoadError = (e: SyntheticEvent<HTMLImageElement>) => {
    setLoadingState('error');
    onError && onError(e);
  };
  const handleImgLoadFinish = (e: SyntheticEvent<HTMLImageElement>) => {
    onLoad && onLoad(e);
  };

  useLayoutEffect(() => {
    (ref.current as any).complete && setLoadingState('success');
  }, [ref.current]);
  const img = (
    <img
      ref={ref}
      onError={handleImgLoadError}
      onLoad={handleImgLoadFinish}
      css={styles}
      loading={(lazy && 'lazy') || 'eager'}
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
