/** @jsxImportSource @emotion/react */

import { css, useTheme } from '@emotion/react';
import { Theme } from '../../styles/themes';
import vars from '../../styles/vars';
import { ComponentPropsWithoutRef, useMemo } from 'react';
import { Base } from '../props';
import { useFunctionLikeValue } from '../../styles/css';

type LinkProps = Base & {
  indicatorColor?: string;
  indicatorSize?: string;
  indicatorAction?: 'always' | 'none' | 'hover';
  color?: string;
  disabled?: boolean;
};

const Link = ({
  disabled,
  indicatorColor,
  indicatorAction = 'always',
  color,
  indicatorSize = '1px',
  co,
  children,
  ...props
}: LinkProps & ComponentPropsWithoutRef<'a'>) => {
  const theme = useTheme() as Theme;
  const indicatorStyles = useMemo(
    () => ({
      borderBottom: `${indicatorSize} solid ${indicatorColor || (theme ? theme.color.black : vars.color.black)}`,
    }),
    [indicatorSize, indicatorColor],
  );
  const styles = css({
    cursor: !disabled ? 'pointer' : 'initial',
    color: color || (theme ? theme.color.black : vars.color.black),
    ...(indicatorAction == 'always'
      ? indicatorStyles
      : indicatorAction == 'hover'
      ? { ':hover': indicatorStyles }
      : {}),
    opacity: disabled ? 0.25 : 1,
    ...(co && useFunctionLikeValue(theme, co)),
  });

  return (
    <a css={styles} {...props}>
      {children}
    </a>
  );
};

export default Link;
