/** @jsxImportSource @emotion/react */

import { Theme } from '../../constants/theme';
import React from 'react';
import clsx from 'clsx';
import { useTheme, css } from '@emotion/react';

type PaginationProps = {
  className?: string;
  count?: 100;
  co?: ((theme: Theme) => React.CSSProperties) | React.CSSProperties;
};

/**
 * Paginations are compact elements that represent an input, attribute, or action.
 * @param string color
 */
const Pagination = ({ count = 100, co, className, ...props }: PaginationProps) => {
  const theme = useTheme() as Theme;
  const computedClassNames = clsx(className);
  const styles = css({
    ...(typeof co == 'function' && co(theme)),
  });
  return <span css={styles} className={computedClassNames} {...props}></span>;
};

export default Pagination;
