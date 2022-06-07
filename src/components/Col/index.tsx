/** @jsxImportSource @emotion/react */

import { Base, Margin, Padding } from '../props';
import { usePadding, useMargin } from '../../styles/css';
import { css, useTheme } from '@emotion/react';
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
  co,
  alignSelf = 'center',
  left = false,
  right = false,
  ...props
}: ColProps) => {
  const theme = useTheme() as Theme;
  const styles = css({
    alignSelf: alignSelf,
    textAlign: (left && 'left') || (right && 'right') || 'center',
    ...useMargin(props),
    ...usePadding(props),
    marginLeft: autoMargin ? 'auto' : props.ml || props.mx,
    ...(!autoMargin && { flex: noFlex ? '' : flex }),
    ...(co && (typeof co == 'function' ? co(theme) : co)),
  });
  return (
    <div css={styles} {...props}>
      {children}
    </div>
  );
};

export default Col;
