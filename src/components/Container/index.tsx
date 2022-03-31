/** @jsxImportSource @emotion/react */
import { Theme } from '../../styles/themes';
import { Base, Margin, Position, Padding } from '../props';
import { usePadding, usePosition, useMargin } from '../../hooks';
import { css, useTheme } from '@emotion/react';
type ContainerProps = Base &
  Margin &
  Position &
  Padding & {
    background?: string;
    color?: string;
    fullHeight?: boolean;
    fullScreen?: boolean;
  };

const Container = ({
  background,
  color,
  fullHeight = false,
  fullScreen = false,
  co,
  children,
  ...props
}: ContainerProps) => {
  const theme = useTheme() as Theme;
  console.log(usePosition(props));

  const styles = css({
    height: fullScreen ? '100vh' : fullHeight ? '100%' : 'auto',
    ...useMargin(props),
    ...usePadding(props),

    background,
    color,
    ...(co && (typeof co == 'function' ? co(theme) : co)),
  });

  return (
    <div css={styles} {...props}>
      {children}
    </div>
  );
};

export default Container;
