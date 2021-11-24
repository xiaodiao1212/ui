/** @jsxImportSource @emotion/react */

import { Theme } from '../../constants/theme';
import React from 'react';
import clsx from 'clsx';
import { css } from '@emotion/react';
import { useTheme } from 'theming';

export type CollapseProps = {
  title?: string;
  expand?: boolean;
  onClickExpand?: () => void;
};

const Collapse = ({
  title,
  expand = false,
  children,
  className,
  ...props
}: CollapseProps & React.ComponentPropsWithoutRef<'div'>) => {
  const theme = useTheme() as Theme;
  const handleClickExpand = () => {
    props?.onClickExpand?.();
  };
  const computedClassNames = clsx(className);

  return (
    <div
      css={css({
        padding: '1em 0',
        '& > .flex': {
          marginBottom: '.4em',
          display: 'flex',
          '& > .title': {
            fontWeight: 700,
            flex: 7,
          },
        },
      })}
      className={computedClassNames}>
      <div className='flex'>
        <div className='title'>{title}</div>
        <div
          css={css({
            marginTop: expand ? '.5em' : '',
            flex: 1,
            '& > div:first-child': {
              marginLeft: 'auto',
              width: '0.6em',
              height: '0.6em',
              borderTop: `1px solid ${theme.color.black || '#111827'}`,
              borderRight: `1px solid ${theme.color.black || '#111827'}`,
              transform: `rotate(${expand ? '-45deg' : '135deg'})`,
            },
          })}>
          <div onClick={handleClickExpand} />
        </div>
      </div>
      {expand && children}
    </div>
  );
};

export default Collapse;
