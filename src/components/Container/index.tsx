/** @jsxImportSource @emotion/react */

import { ComponentBaseProps, Margin, Position, Padding, Themed } from '../props';
import { useCSS, useTheme, usePadding, usePosition, useMargin, useThemedCSS, useThemedValue } from '../../styles/css';

type ContainerProps = ComponentBaseProps &
  Margin &
  Position &
  Padding & {
    w?: string;
    h?: string;
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
const Container = ({
  w,
  h,
  background,
  fullHeight = false,
  fullScreen = false,
  css,
  children,
  ...props
}: ContainerProps) => {
  const theme = useTheme();
  const styles = useCSS({
    height: h ? (fullScreen ? '100vh' : fullHeight ? '100%' : 'auto') : '',
    ...useMargin(props),
    ...usePadding(props),
    ...usePosition(props),
    width: w ? (props.fixed ? '100%' : '') : '',
    background: useThemedValue(theme, background),
    ...useThemedCSS(theme, css)
  });

  return (
    <div css={styles} {...props}>
      {children}
    </div>
  );
};

export default Container;
