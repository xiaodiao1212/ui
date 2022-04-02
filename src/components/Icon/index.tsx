/** @jsxImportSource @emotion/react */

import { Theme } from '../../styles/themes';
import { useTheme, css } from '@emotion/react';
import { Base } from '../props';

type IconProps = Base & {
  width?: string;
  height?: string;
  color?: string;
  src?: string;

  onClick?: () => any;
};
const Icon = ({ width, height, color, co, src, onClick, ...props }: IconProps) => {
  const theme = useTheme() as Theme;
  const styles = css({
    display: 'inline-block',
    width: width,
    height: height,
    backgroundColor: color,
    mask: `url(${src}) no-repeat`,
    maskSize: '100% 100%',
    ...(co && (typeof co == 'function' ? co(theme) : co)),
  });

  const handleClickIcon = () => {
    onClick?.();
  };
  return <div css={styles} onClick={handleClickIcon} {...props} />;
};

export default Icon;
