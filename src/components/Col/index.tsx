/** @jsxImportSource @emotion/react */

import { Base, Margin, Padding } from '../props';
import { usePadding, useMargin, useCSS, useTheme, useFunctionLikeValue } from '../../styles/css';

import { Theme } from '../../styles/themes';
type ColProps = Base & {
  alignSelf?: 'start' | 'center' | 'end' | 'baseline' | 'stretch' | 'normal';
  flex?: number | string;
  noFlex?: boolean;
  autoMargin?: boolean;
  left?: boolean;
  right?: boolean;
} & Margin &
  Padding;

const Col = ({
  children,
  noFlex,
  flex = 'none',
  autoMargin,
  css,
  alignSelf = 'center',
  left = false,
  right = false,
  ...props
}: ColProps) => {
  const theme = useTheme() as Theme;
  const styles = useCSS({
    alignSelf: alignSelf,
    textAlign: (left && 'left') || (right && 'right') || 'center',
    ...useMargin(props),
    ...usePadding(props),
    marginLeft: autoMargin ? 'auto' : props.ml || props.mx,
    ...(!autoMargin && { flex: noFlex ? '' : flex }),
    ...useFunctionLikeValue(theme, css),
  });
  return (
    <div css={styles} {...props}>
      {children}
    </div>
  );
};

export default Col;
