/** @jsxImportSource @emotion/react */

import { Theme } from '../../constants/theme';
import React from 'react';
import clsx from 'clsx';
import { css, useTheme } from '@emotion/react';

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
            marginRight: '.5em',
            marginLeft: 'auto',
            transition: 'transform .1s',
            transform: `rotate(${expand ? '-45deg' : '135deg'}) translateY(${expand ? '' : '-'}50%)`,
            width: '0.5em',
            height: '0.5em',
            borderTop: `1px solid ${theme?.color?.black || '#232149'}`,
            borderRight: `1px solid ${theme?.color?.black || '#232149'}`,
          })}
          onClick={handleClickTrigger}
        />
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
    <div className={className && computedClassNames}>
      <div
        css={css({
          display: 'flex',
          '& > .title': {
            flex: '1',
          },
        })}>
        {renderTitle()}
        {renderTrigger()}
      </div>
      {expand && children}
    </div>
  );
};

export default Collapse;
