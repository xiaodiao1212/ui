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
  blank?: boolean;
  disabled?: boolean;
};

/**
 * Links allow users to navigate to a different location. 
 * They can be presented inline inside a paragraph or as standalone text.
 * ```
 * <Link href='#' indicatorAction='none' color='green'>
      customr link
   </Link>
 * ```
 * @param indicatorColor link's underline color.
 * @param color link's text color.
 * @param indicatorAction link's underline triger way.
 * @param indicatorSize link's underline coarseness.
 * @param blank open url with new window.
 * @returns <a> tag 
 */
const Link = ({
  disabled,
  indicatorColor,
  indicatorAction = 'always',
  color,
  blank = false,
  indicatorSize = '1px',
  co,
  children,
  ...props
}: LinkProps & ComponentPropsWithoutRef<'a'>) => {
  const theme = useTheme() as Theme;

  // indicator styles
  const indicatorStyles = useMemo(
    () => ({
      borderBottom: `${indicatorSize} solid 
      ${indicatorColor || (theme ? theme.color.black : vars.color.black)}`,
    }),
    [indicatorSize, indicatorColor],
  );

  const styles = css({
    cursor: !disabled ? 'pointer' : 'initial',
    color: color || (theme ? theme.color.black : vars.color.black),
    // indicator show way by `indicatorAction`
    ...(indicatorAction == 'always'
      ? indicatorStyles
      : indicatorAction == 'hover'
      ? { ':hover': indicatorStyles }
      : {}),
    opacity: disabled ? 0.25 : 1,
    ...(co && useFunctionLikeValue(theme, co)),
  });

  return (
    <a target={blank ? '_blank' : '_self'} css={styles} {...props}>
      {children}
    </a>
  );
};

export default Link;
