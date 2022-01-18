/** @jsxImportSource @emotion/react */

import clsx from 'clsx';
import { css, useTheme } from '@emotion/react';
import { Theme } from '../../constants/theme';
import React, { ReactNode } from 'react';
import Step from './Step';
import { StepProps } from './Step';

type StepsProps = {
  type?: 'default' | 'navigation';
  className?: string;
  current?: number;
  direction?: 'horizontal' | 'vertical';
  iconPrefix?: string;
  initial?: number;
  labelPlacement?: 'horizontal' | 'vertical';
  prefixCls?: string;
  responsive?: boolean;
  size?: 'default' | 'small';
  status?: 'wait' | 'process' | 'finish' | 'error';
  children?: ReactNode;
  co?: ((theme: Theme) => React.CSSProperties) | React.CSSProperties;
  onChange?: (current: number) => void;
};

const Steps = ({
  co,
  className,
  current = 1,
  direction = 'horizontal',
  initial = 1,
  labelPlacement = 'horizontal',
  children,
  ...props
}: StepsProps & React.ComponentPropsWithoutRef<'div'>) => {
  const theme = useTheme() as Theme;
  const styles = css({
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    '& .icon': {
      position: 'relative',
      boxSizing: 'border-box',
      top: -4,
    },
    '& .circle': {
      width: 25,
      height: 25,
      borderStyle: 'solid',
      borderWidth: 1,
      borderRadius: '50%',
      position: 'absolute',
      left: -8,
      top: -1,
    },
    '& .wait': {
      borderColor: 'gray',
    },
    '& .finish': {
      borderColor: 'blue',
    },
    '& .process': {
      borderColor: 'blue',
    },
    '& .error': {
      borderColor: 'red',
    },
    '& .text-finish': {
      color: 'blue',
    },
    '& .text-process': {
      color: 'blue',
    },
    '& .text-wait': {
      color: 'gray',
    },
    '& .text-error': {
      color: 'red',
    },
    ...(typeof co == 'function' ? co(theme) : co),
  });
  const computedClassNames = clsx(className);
  const nat = React.Children.map(children, (child, index) => {
    if (!React.isValidElement(child)) {
      return child;
    }
    const props = child.props as StepProps;
    let status = props.status || 'wait';
    if (index + 1 < current) {
      status = props.status || 'finish';
    } else if (index + 1 === current) {
      status = props.status || 'process';
    }

    const icon = props.icon ?? (
      <span className={`icon`}>
        <span className={`circle ${status}`}></span>
        <span className={`text-${status}`}>{index + 1}</span>
      </span>
    );

    return React.cloneElement(child, {
      status,
      icon,
    });
  });
  return (
    <div css={styles} className={computedClassNames} {...props}>
      {nat}
    </div>
  );
};
Steps.Step = Step;
export default Steps;
