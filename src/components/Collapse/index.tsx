/** @jsxImportSource @emotion/react */

import { Theme } from '../../constants/theme';
import React from 'react';
import clsx from 'clsx';
import arrowSVG from '../../../assets/arrow-up.svg';
import { css, useTheme, keyframes } from '@emotion/react';
import Icon from '../Icon';
type CollapseProps = {
  title?: React.ReactNode | (() => React.ReactNode) | string;
  expand: boolean;
  animated?: boolean;
  trigger?: React.ReactNode | (() => React.ReactNode);
  onChange: () => void;
  className?: string;
  children?: React.ReactNode;
};

const Collapse = ({
  title,
  animated = true,
  expand = false,
  trigger,
  children,
  className,
  ...props
}: CollapseProps) => {
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
          transform: `rotate(${expand ? '0deg' : '180deg'})`,
        }),
      });
    else
      return (
        <Icon
          color='red'
          src={arrowSVG}
          co={{
            marginLeft: 'auto',
            transition: 'transform .1s',
            transform: `rotate(${expand ? '0deg' : '180deg'})`,
            width: '1em',
            height: '1em',
          }}
          onClick={handleClickTrigger}
        />
      );
  };

  const renderChildren = () => {
    if (animated)
      return (
        <div
        // css={css({
        //   animation: `${keyframes({
        //     '0%': {
        //       maxHeight: '0',
        //     },
        //     '100%': {
        //       maxHeight: '100%',
        //     },
        //   })} .8s `,
        // })}
        >
          {children}
        </div>
      );

    return children;
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
          alignItems: 'center',
          '& > .title': {
            flex: '1',
          },
        })}>
        {renderTitle()}
        {renderTrigger()}
      </div>
      {expand && renderChildren()}
    </div>
  );
};

export default Collapse;
