/** @jsxImportSource @emotion/react */

import { Theme } from '../../styles/themes';
import { ComponentBaseProps, Margin, Position, Padding, Themed } from '../props';
import { useCSS, useTheme, usePadding, useMargin, useThemedCSS } from '../../styles/css';

type ContainerProps = ComponentBaseProps &
  Margin &
  Position &
  Padding & {
    background?: Themed<string>;
    fullHeight?: boolean;
    fullScreen?: boolean;
  };

/**
 * The universal component packer
 * ```js
 *  <Container pa='1em'>
        <Button>ok</Button>
    </Container>
 * ```
 * @param background backgroud color
 * @param fullHeight full height or not
 * @param fullScreen full screen or not
 * @returns
 */
const Container = ({ background, fullHeight = false, fullScreen = false, css, children, ...props }: ContainerProps) => {
  const theme = useTheme();
  const styles = useCSS({
    height: fullScreen ? '100vh' : fullHeight ? '100%' : 'auto',
    ...useMargin(props),
    ...usePadding(props),
    background: useThemedCSS(theme, background),
    ...useThemedCSS(theme, css),
  });

  return (
    <div css={styles} {...props}>
      {children}
    </div>
  );
};

export default Container;
