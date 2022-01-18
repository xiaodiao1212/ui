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
  co?: ((theme: Theme) => React.CSSProperties) | React.CSSProperties;
};

const Step = ({
  co,
  className,
  children,
  title,
  icon,
  status,
  ...props
}: StepProps & React.ComponentPropsWithoutRef<'button'>) => {
  const theme = useTheme() as Theme;
  const styles = css({
    display: 'block',
    height: '100%',
    width: '100%',
    '& :hover': {
      opacity: 0.8,
    },
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
      color: 'blue',
    },
    '& .indicator': {
      position: 'relative',
      '&::after': {
        content: '""',
        position: 'absolute',
        zIndex: 0,
        borderStyle: 'dashed',
        borderWidth: '1px',
        borderColor: status === 'finish' ? 'blue' : 'gray',
      },
    },
    '& .indicators': {
      width: '100%',
      height: '24px',
      '&::after': {
        left: '19%',
        top: '30%',
        height: '1px',
        transform: 'translateY(-50%)',
        width: '72%',
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
    },
    '& .pagragh': {
      position: 'absolute',
      left: '10px',
      padding: '3em 2em 1em 1em',
      fontSize: '12px',
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
      {status === 'process' ? <div className={`pagragh`}>{children}</div> : null}
    </div>
  );
};

export default Step;
