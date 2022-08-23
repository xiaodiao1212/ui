/** @jsxImportSource @emotion/react */

import { Theme } from '../../styles/themes';
import React from 'react';
import arrowSVG from '../../icons/arrow-up.svg';
import { css, useTheme, keyframes } from '@emotion/react';
import Icon from '../Icon';
import { Base } from '../props';
//ExpansionPanel
type CollapseProps = Base & {
  title?: React.ReactNode | (() => React.ReactNode) | string;
  expand: boolean;
  animated?: boolean;
  trigger?: React.ReactNode | (() => React.ReactNode);
  onChange: () => void;
};

const Collapse = ({ title, animated = true, expand = false, trigger, children, ...props }: CollapseProps) => {
  const theme = useTheme() as Theme;

  const handleClickTrigger = () => {
    props?.onChange?.();
  };
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
          width='1.2em'
          height='1.2em'
          color={theme.color.black}
          src={arrowSVG}
          css={{
            marginLeft: 'auto',
            transition: 'transform .1s',
            transform: `rotate(${expand ? '0deg' : '180deg'})`,
          }}
          onClick={handleClickTrigger}
        />
      );
  };

  const renderChildren = () => {
    if (animated) return <div>{children}</div>;

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
    <div>
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
