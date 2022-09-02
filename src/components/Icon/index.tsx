/** @jsxImportSource @emotion/react */

import { Theme } from '../../styles/themes';
import { Base, Themed } from '../props';

import { useFunctionLikeValue, useCSS, useTheme, useColor } from '../../styles/css';
import vars from '../../styles/vars';

type IconProps = Base & {
  width?: string;
  height?: string;
  color?: string;
  src?: string;

  onClick?: () => any;
};
const Icon = ({ width, height, color, css, src, onClick, ...props }: IconProps) => {
  const theme = useTheme() as Theme;
  const styles = useCSS({
    display: 'inline-block',
    width: width,
    height: height,
    backgroundColor: color,
    mask: `url(${src}) no-repeat`,
    maskSize: '100% 100%',
    ...useFunctionLikeValue(theme, css),
  });

  const handleClickIcon = () => {
    onClick?.();
  };
  return <div css={styles} onClick={handleClickIcon} {...props} />;
};

export default Icon;
