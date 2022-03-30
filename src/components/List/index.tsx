/** @jsxImportSource @emotion/react */

import clsx from 'clsx';
import { css, keyframes, useTheme } from '@emotion/react';
import { Theme } from '../../styles/themes';
import { ComponentPropsWithoutRef, CSSProperties, ReactNode } from 'react';

type ListItem = {
  id?: string | number;
  key?: ReactNode;
  avator?: ReactNode;
  title?: ReactNode;
  content?: ReactNode;

  extra?: ReactNode;
};
type ListProps = {
  divider?: boolean | ReactNode;
  data: ListItem[];
  pa?: string;
  ma?: string;
  py?: string;
  px?: string;
  my?: string;
  mx?: string;
  renderItem?: (item: ListItem) => ReactNode;
  gap?: string;
  innerGap?: string;
  co?: ((theme: Theme) => CSSProperties) | CSSProperties;
};

const List = ({
  data,
  renderItem,
  gap,
  innerGap,
  co,
  divider,
  pa,
  ma,
  py,
  px,
  my,
  mx,
  className,
  children,
  ...props
}: ListProps & ComponentPropsWithoutRef<'section'>) => {
  const theme = useTheme() as Theme;
  const listStyles = css({
    display: 'flex',
    flexDirection: 'column',
    gap,
  });
  const itemStyles = css({
    display: 'flex',
    alignItems: 'center',
    innerGap,
    padding: pa,
    margin: ma,
    paddingTop: py,
    paddingBottom: py,
    paddingLeft: px,
    paddingRight: px,
    marginTop: py,
    marginBottom: py,
    marginLeft: px,
    marginRight: px,
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
    <ul css={listStyles} className={computedClassNames} {...props}>
      {data.map(v => (renderItem ? renderItem(v) : defaulRenderItem(v)))}
    </ul>
  );
};

export default List;
