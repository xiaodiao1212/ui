/** @jsxImportSource @emotion/react */

import clsx from 'clsx';
import { css, keyframes, useTheme } from '@emotion/react';
import { Theme } from '../../constants/theme';
import * as React from 'react';
import ListItem from './ListItem';

type ListProps = {
  co?: ((theme: Theme) => React.CSSProperties) | React.CSSProperties;
};

const List = ({ co, className, children, ...props }: ListProps & React.ComponentPropsWithoutRef<'section'>) => {
  const theme = useTheme() as Theme;

  const styles = css({
    overflow: 'hidden',
    ...(co && (typeof co == 'function' ? co(theme) : co)),
  });

  const computedClassNames = clsx(className);

  return (
    <section css={styles} role='list' className={computedClassNames} {...props}>
      {children}
    </section>
  );
};

List.Item = ListItem;
export default List;
