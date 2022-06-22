/** @jsxImportSource @emotion/react */

import { Theme } from '../../styles/themes';
import { Base, Margin, Position, Padding } from '../props';
import { useCSS, useTheme, usePadding, useMargin, useFunctionLikeValue } from '../../styles/css';

type ContainerProps = Base &
  Margin &
  Position &
  Padding & {
    background?: ((theme: Theme) => string) | string;

    fullHeight?: boolean;
    fullScreen?: boolean;
  };

const Container = ({ background, fullHeight = false, fullScreen = false, css, children, ...props }: ContainerProps) => {
  const theme = useTheme() as Theme;
  const styles = useCSS({
    height: fullScreen ? '100vh' : fullHeight ? '100%' : 'auto',
    ...useMargin(props),
    ...usePadding(props),
    background: useFunctionLikeValue(theme, background),
    ...useFunctionLikeValue(theme, css),
  });

  return (
    <div css={styles} {...props}>
      {children}
    </div>
  );
};

export default Container;
