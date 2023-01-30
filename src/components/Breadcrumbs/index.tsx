/** @jsxImportSource @emotion/react */

import { ComponentBaseProps } from '../props';
import { useThemedCSS, useCSS, useTheme } from '../../styles/css';
import { Children, cloneElement, DetailedReactHTMLElement, ComponentPropsWithoutRef, forwardRef } from 'react';

type BreadcrumbsItemProps = ComponentBaseProps & Partial<{}>;
type BreadcrumbsProps = ComponentBaseProps &
  Partial<{
    separator: string;
    gap: string;
  }>;

type BreadcrumbsSeparatorProps = ComponentBaseProps & {};

/**
 * Breadcrumbs are navigation items that are used to indicate where a user is on an app or site. 
 * ```js
 * <Breadcrumbs>
      <Breadcrumbs.Item>Home</Breadcrumbs.Item>
      <Breadcrumbs.Item>Electronics</Breadcrumbs.Item>
      <Breadcrumbs.Item>Cameras</Breadcrumbs.Item>
      <Breadcrumbs.Item>Film</Breadcrumbs.Item>
    </Breadcrumbs>
 * ```
 * @param separator ever item's separator component
 * @param items breadcrumb items with <BreadcrumbsItem>
 * @param gap item's gap
 */
const Breadcrumbs = forwardRef<HTMLDivElement, ComponentPropsWithoutRef<'div'> & BreadcrumbsProps>(
  ({ separator = '/', gap = '1em', children, css, ...props }, ref) => {
    const theme = useTheme();
    const styles = useCSS({
      display: 'inline-flex',
      alignItems: 'center',
      gap,
      ...useThemedCSS(theme, css),
    });

    return (
      <nav ref={ref} css={styles} {...props}>
        {Children.map(children, (child: any, i) => {
          const element = child as DetailedReactHTMLElement<any, HTMLDivElement>;
          if (child.type.name == 'BreadcrumbItem') {
            return (
              <>
                {cloneElement(element, {
                  ...{ ...element.props },
                })}
                {i != Children.count(children) - 1 && <BreadcrumbsSeparator>{separator}</BreadcrumbsSeparator>}
              </>
            );
          }
          return undefined;
        })}
      </nav>
    );
  },
);

const BreadcrumbItem = forwardRef<HTMLDivElement, ComponentPropsWithoutRef<'div'> & BreadcrumbsItemProps>(
  ({ children, css, ...props }, ref) => {
    const theme = useTheme();
    const styles = useCSS({
      display: 'inline-flex',
      flex: 1,
      ...(props.onClick && {
        '&:hover': {
          cursor: 'pointer',
        },
      }),
      ...useThemedCSS(theme, css),
    });

    return (
      <div ref={ref} css={styles} {...props}>
        {children}
      </div>
    );
  },
);

const BreadcrumbsSeparator = forwardRef<HTMLDivElement, ComponentPropsWithoutRef<'div'> & BreadcrumbsSeparatorProps>(
  ({ children, css, ...props }, ref) => {
    const theme = useTheme();
    const styles = useCSS({
      display: 'inline-flex',
      flex: 1,
      ...useThemedCSS(theme, css),
    });

    return (
      <div ref={ref} css={styles} {...props}>
        {children}
      </div>
    );
  },
);

(Breadcrumbs as any).Item = BreadcrumbItem;
(Breadcrumbs as any).Separator = BreadcrumbsSeparator;
export default Breadcrumbs;
