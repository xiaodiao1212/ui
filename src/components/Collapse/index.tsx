/** @jsxImportSource @emotion/react */

import { Theme } from '../../constants/theme';
import React from 'react';
import clsx from 'clsx';
import { css } from '@emotion/react';
import { useTheme } from 'theming';

type CollapseProps = {
  title?: React.ReactNode | (() => React.ReactNode) | string;
  expand?: boolean;
  trigger?: React.ReactNode | (() => React.ReactNode);
  onChange?: () => void;
  className?: string;
  children?: React.ReactNode;
};

const Collapse = ({ title, expand = false, trigger, children, className, ...props }: CollapseProps) => {
  const theme = useTheme() as Theme;

  const handleClickTrigger = () => {
    props?.onChange?.();
  };
  const computedClassNames = clsx(className);
  const renderTrigger = () => {
    if (trigger)
      return React.cloneElement(typeof trigger === 'function' ? trigger() : trigger, {
        css: css({
          marginLeft: 'auto',
          transformOrigin: '50% 50%',
          transform: `rotate(${expand ? '-45deg' : '135deg'})`,
        }),
      });
    else
      return (
        <div
          css={css({
            marginTop: expand ? '.5em' : '',
            '& > div:first-child': {
              marginLeft: 'auto',
              width: '0.6em',
              height: '0.6em',
              borderTop: `1px solid ${theme?.color?.black || '#111827'}`,
              borderRight: `1px solid ${theme?.color?.black || '#111827'}`,

              transform: `rotate(${expand ? '-45deg' : '135deg'})`,
            },
          })}>
          <div onClick={handleClickTrigger} />
        </div>
      );
  };

  const renderTitle = () => {
    return typeof title == 'function' ? (
      title()
    ) : typeof title == 'string' ? (
      <div className='title'>{title}</div>
    ) : (
      title
    );
  };
  return (
    <div className={computedClassNames}>
      <div
        css={css({
          display: 'flex',
          '& > .title': {},
        })}>
        {renderTitle()}
        {renderTrigger()}
      </div>
      {expand && children}
    </div>
  );
};

export default Collapse;
