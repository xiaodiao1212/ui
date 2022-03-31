/** @jsxImportSource @emotion/react */

import { css, useTheme } from '@emotion/react';
import { Theme } from '../../styles/themes';
import * as React from 'react';
import { Base } from '../props';

type DropdownProps = Base & {
  show?: boolean;
  co: ((theme: Theme) => React.CSSProperties) | React.CSSProperties;
};

const Dropdown = ({ co, children, ...props }: React.ComponentPropsWithoutRef<'div'> & DropdownProps) => {
  const theme = useTheme() as Theme;
  const styles = css({
    ...(co && (typeof co == 'function' ? co(theme) : co)),
  });

  return <div css={styles} {...props}></div>;
};

export default Dropdown;
