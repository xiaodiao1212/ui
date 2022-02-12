/** @jsxImportSource @emotion/react */
import clsx from 'clsx';
import { css, useTheme } from '@emotion/react';
import { Theme } from '../../constants/theme';
import * as React from 'react';

type ToolBarProps = {
  title?: React.ReactNode;
  left?: React.ReactNode;
  right?: React.ReactNode;
  className?: string;
  co?: ((theme: Theme) => React.CSSProperties) | React.CSSProperties;
  children?: React.ReactNode;
};

const ToolBar = ({ title, left, right, co, className, children, ...props }: ToolBarProps) => {
  const theme = useTheme() as Theme;
  const styles = css({
    ...(co && (typeof co == 'function' ? co(theme) : co)),
  });

  return (
    <div css={styles} className={clsx(className)} {...props}>
      {children}
    </div>
  );
};

export default ToolBar;
