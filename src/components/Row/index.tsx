/** @jsxImportSource @emotion/react */

import { css, useTheme } from '@emotion/react';
import { useMargin, usePadding } from '../../styles/css';
import { Theme } from '../../styles/themes';
import { Base, Margin, Padding } from '../props';

type RowProps = Margin &
  Padding &
  Base & {
    vertical?: boolean;
    alignItems?: 'start' | 'center' | 'end' | 'baseline' | 'stretch';
    justifyContent?: 'start' | 'center' | 'end' | 'space-around' | 'space-between';
    gap?: string;
    wrap?: boolean;
    fullHeight?: boolean;
  };
/**
 * Links allow users to navigate to a different location. They can be presented inline inside a paragraph or as standalone text.
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
const Row = ({ children, vertical, wrap, fullHeight, alignItems, justifyContent, gap, co, ...props }: RowProps) => {
  const theme = useTheme() as Theme;
  const styles = css({
    display: 'flex',
    width: '100%',
    ...useMargin(props),
    ...usePadding(props),
    justifyContent: justifyContent || '',
    flexDirection: vertical ? 'column' : 'row',
    height: fullHeight ? '100%' : 'initial',
    gap: gap,
    alignItems,
    ...(vertical ? {} : { flexWrap: wrap ? 'wrap' : 'nowrap' }),
    ...(co && typeof co == 'function' ? co(theme) : co),
  });
  return (
    <div css={styles} {...props}>
      {children}
    </div>
  );
};

export default Row;
