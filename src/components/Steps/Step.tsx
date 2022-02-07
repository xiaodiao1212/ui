/** @jsxImportSource @emotion/react */

import clsx from 'clsx';
import { css, useTheme } from '@emotion/react';
import { Theme } from '../../constants/theme';
import React, { ReactNode } from 'react';

export type StepProps = {
  title?: ReactNode;
  children?: ReactNode;
  status?: 'wait' | 'process' | 'finish' | 'error';
  icon?: React.ReactNode;
  isDashed?: boolean;
  co?: ((theme: Theme) => React.CSSProperties) | React.CSSProperties;
};

export const Step = ({
  co,
  className,
  children,
  title,
  icon,
  status,
  isDashed,
  ...props
}: StepProps & React.ComponentPropsWithoutRef<'div'>) => {
  const theme = useTheme() as Theme;
  const color = theme.color.primary;
  const styles = css({
    display: 'block',
    height: '100%',
    width: '100%',
    // '& :hover': {
    //   color: color,
    // },
    '& .wait': {
      color: 'gray',
    },
    '& .finish': {
      color: 'black',
    },
    '& .error': {
      color: 'red',
    },
    '& .process': {
      color: color,
    },
    '& .indicator': {
      position: 'relative',
      '&::after': {
        content: '""',
        position: 'absolute',
        zIndex: 0,
        borderStyle: isDashed ? 'dashed' : 'solid',
        borderWidth: '1px',
        borderColor: status === 'finish' ? color : 'gray',
      },
    },
    '& .indicators': {
      width: '100%',
      height: '24px',
      '&::after': {
        left: '19%',
        top: '30%',
        height: '1px',
        transform: 'translateY(-50%) translateX(10%)',
        width: '60%',
        opacity: status === 'finish' ? '100%' : '30%',
      },
    },
    '&:last-child': {
      '.indicators::after': {
        display: 'none',
      },
    },
    '& .icon-container': {
      position: 'absolute',
      zIndex: 1,
    },
    '& .content': {
      fontSize: '12px',
      paddingTop: '2px',
      marginLeft: '-10px',
      textAlign: 'left',
    },
    ...(typeof co == 'function' ? co(theme) : co),
  });
  const computedClassNames = clsx(className);
  return (
    <div css={styles} className={computedClassNames} {...props}>
      <div className={`indicators indicator`}>
        <div className={`icon-container`}>{icon}</div>
      </div>
      <div className={`content`}>
        <div className={`${status}`}>{title}</div>
      </div>
    </div>
  );
};
