/** @jsxImportSource @emotion/react */

import { Theme } from '../../constants/theme';
import clsx from 'clsx';
import { useTheme, css } from '@emotion/react';
// import * as ReactCSS from 'csstype';

type IconProps = {
  width?: string;
  height?: string;
  color?: string;
  src?: string;
  className?: string;
  onClick?: () => any;
  co?: ((theme: Theme) => React.CSSProperties) | React.CSSProperties;
};
const Icon = ({ width, height, color, co, src, onClick, className }: IconProps) => {
  const theme = useTheme() as Theme;
  const styles = css({
    display: 'inline-block',
    width: width,
    height: height,
    backgroundColor: color,
    mask: `url(${src}) no-repeat`,
    maskSize: '100% 100%',
    ...(typeof co == 'function' ? co(theme) : co),
  });
  const computedClassNames = clsx(className);
  const handleClickIcon = () => {
    onClick?.();
  };
  return <div css={styles} className={computedClassNames} onClick={handleClickIcon} />;
};

export default Icon;
