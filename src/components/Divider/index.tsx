/** @jsxImportSource @emotion/react */
import clsx from 'clsx';
import { css, useTheme } from '@emotion/react';
import { Theme } from '../../constants/theme';
import * as React from 'react';
type DividerProps = {
  width?: number;
  vertical?: boolean;
  color?: string;
  doubleLine?: boolean;
  dashed?: boolean;
  co?: ((theme: Theme) => React.CSSProperties) | React.CSSProperties;
};

const Divider = ({
  width = 1,
  vertical = false,
  dashed = false,
  doubleLine = false,
  color,
  co,
  className,
  children,
  ...props
}: DividerProps & React.ComponentPropsWithoutRef<'hr'>) => {
  const theme = useTheme() as Theme;
  const styles = css({
    border: 'none',
    ...(vertical
      ? {
          display: 'inline',
          borderLeft: `${width}px ${dashed ? 'dashed' : 'solid'}  ${
            color || (theme.mode == 'light' ? theme.color.greyLight : theme.color.grey)
          }`,
        }
      : {
          borderTop: `${width}px ${dashed ? 'dashed' : 'solid'}  ${
            color || (theme.mode == 'light' ? theme.color.greyLight : theme.color.grey)
          }`,
        }),
    ...(co && (typeof co == 'function' ? co(theme) : co)),
  });
  return <hr css={styles} className={clsx(className)} {...props} />;
};

export default Divider;
