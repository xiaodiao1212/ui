/** @jsxImportSource @emotion/react */
import clsx from 'clsx';
import { css, useTheme } from '@emotion/react';
import { Theme } from '../../constants/theme';
import * as React from 'react';

interface DropdownProps {
  show?: boolean;
  co: ((theme: Theme) => React.CSSProperties) | React.CSSProperties;
}

const Dropdown = ({ co, children, className, ...props }: React.ComponentPropsWithoutRef<'div'> & DropdownProps) => {
  const theme = useTheme() as Theme;
  const styles = css({
    ...(co && (typeof co == 'function' ? co(theme) : co)),
  });
  const computedClassNames = clsx(className);

  return <div css={styles} className={computedClassNames} {...props}></div>;
};

export default Dropdown;
