/** @jsxImportSource @emotion/react */

import clsx from 'clsx';
import { css, keyframes, useTheme } from '@emotion/react';
import { Theme } from '../../constants/theme';
import * as React from 'react';
type ListItem = {
  id?: string | number;

  avator?: React.ReactNode;
  title?: React.ReactNode;
  content?: React.ReactNode;
  extra?: React.ReactNode;
};
type ListProps = {
  divider?: boolean;
  data: ListItem[];
  renderItem?: (item: ListItem) => React.ReactNode;
  gap?: string;
  co?: ((theme: Theme) => React.CSSProperties) | React.CSSProperties;
};

const List = ({
  data,
  renderItem,
  gap,
  co,
  divider,
  className,
  children,
  ...props
}: ListProps & React.ComponentPropsWithoutRef<'section'>) => {
  const theme = useTheme() as Theme;

  const itemStyles = css({
    display: 'flex',
    alignItems: 'center',
    gap,
    borderBottom: divider ? '1px solid #F4F5F7' : '',
    ...(co && (typeof co == 'function' ? co(theme) : co)),
  });

  const defaulRenderItem = ({ id, avator, title, content, extra }: ListItem) => {
    return (
      <li key={id} css={itemStyles}>
        {avator && (
          <div
            css={css({
              flex: 'none',
            })}>
            {avator}
          </div>
        )}
        {(title || content) && (
          <div
            css={css({
              flex: 'auto',
            })}>
            <div>{title}</div>
            <div>{content}</div>
          </div>
        )}
        {extra && (
          <div
            css={css({
              marginLeft: 'auto',
            })}>
            {extra}
          </div>
        )}
      </li>
    );
  };

  const computedClassNames = clsx(className);

  return (
    <ul className={computedClassNames} {...props}>
      {data.map(v => (renderItem ? renderItem(v) : defaulRenderItem(v)))}
    </ul>
  );
};

export default List;
