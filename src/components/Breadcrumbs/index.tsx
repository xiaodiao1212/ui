/** @jsxImportSource @emotion/react */

import { ComponentBaseProps } from '../props';

import { useThemedCSS, useCSS, useTheme } from '../../styles/css';
import { ReactNode, createContext, Children, cloneElement, DetailedReactHTMLElement } from 'react';

type BreadcrumbsItemProps = ComponentBaseProps & Partial<{}>;
type BreadcrumbsProps = ComponentBaseProps &
  Partial<{
    separator: ReactNode;
    gap: string;
  }>;

type BreadcrumbsSeparatorProps = ComponentBaseProps & {};
type BreadcrumbsContext = {};

const breadcrumbsContext = createContext<BreadcrumbsContext>({});

/**
 * Breadcrumbs are navigation items that are used to indicate where a user is on an app or site. 
 * ```js
 * <Breadcrumbs>
      <Breadcrumbs.Item href="#home">Home</Breadcrumbs>
      <Breadcrumbs.Item href="#electronics">Electronics</Breadcrumbs>
      <Breadcrumbs.Item href="#cameras">Cameras</Breadcrumbs>
      <Breadcrumbs.Item href="#film">Film</Breadcrumbs>
    </IonBreadcrumbs>
 * ```
 * @param separator ever item's separator component
 * @param items breadcrumb items
 */
const Breadcrumbs = ({ separator = '/', gap = '1em', children, css, ...props }: BreadcrumbsProps) => {
  const theme = useTheme();
  const sliderStyles = useCSS({
    display: 'inline-flex',
    alignItems: 'center',
    gap,
    ...useThemedCSS(theme, css),
  });

  return (
    <nav css={sliderStyles} {...props}>
      {Children.map(children, (child: any, i) => {
        const element = child as DetailedReactHTMLElement<any, HTMLElement>;

        if (child.type.name == 'Breadcrumb') {
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
};

const Breadcrumb = ({ children, css, ...props }: BreadcrumbsItemProps) => {
  const theme = useTheme();
  const sliderStyles = useCSS({
    display: 'inline-flex',
    flex: 1,
    ...useThemedCSS(theme, css),
  });

  return (
    <div css={sliderStyles} {...props}>
      {children}
    </div>
  );
};
const BreadcrumbsSeparator = ({ children, css, ...props }: BreadcrumbsSeparatorProps) => {
  const theme = useTheme();
  const sliderStyles = useCSS({
    display: 'inline-flex',
    flex: 1,
    ...useThemedCSS(theme, css),
  });

  return (
    <div css={sliderStyles} {...props}>
      {children}
    </div>
  );
};
Breadcrumbs.Item = Breadcrumb;
Breadcrumbs.Separator = BreadcrumbsSeparator;
export default Breadcrumbs;
