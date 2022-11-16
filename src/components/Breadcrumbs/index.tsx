/** @jsxImportSource @emotion/react */

import { ComponentBaseProps } from '../props';

import { useThemedCSS, useCSS, useTheme } from '../../styles/css';
import { ReactNode, createContext } from 'react';

type BreadcrumbsItem = ComponentBaseProps &
  Partial<{
    link: boolean;
    title: string;
    onClick: () => any;
  }>;
type BreadcrumbsProps = ComponentBaseProps &
  Partial<{
    separator: ReactNode;
    items: BreadcrumbsItem[];
  }>;
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
const Breadcrumbs = ({ separator = '/', children, className, css }: BreadcrumbsProps) => {
  const theme = useTheme();
  const sliderStyles = useCSS({
    display: 'inline-flex',
    alignItems: 'center',
    '& > *': {
      display: 'inline-flex',
    },
    ...useThemedCSS(theme, css),
  });

  return (
    <nav css={sliderStyles} className={'breadcrumbs ' + className}>
      {children}
    </nav>
  );
};
const Breadcrumb = ({ children, className, css }: BreadcrumbsProps) => {
  const theme = useTheme();
  const sliderStyles = useCSS({
    display: 'inline-flex',
    flex: 1,
    ...useThemedCSS(theme, css),
  });

  return (
    <div css={sliderStyles} className={'breadcrumbs ' + className}>
      {children}
    </div>
  );
};
const BreadcrumbsSeparator = ({ children, className, css }: BreadcrumbsProps) => {
  const theme = useTheme();
  const sliderStyles = useCSS({
    display: 'inline-flex',
    ...useThemedCSS(theme, css),
  });

  return (
    <div css={sliderStyles} className={'breadcrumbs ' + className}>
      {children}
    </div>
  );
};
Breadcrumbs.Item = Breadcrumb;
Breadcrumbs.Separator = BreadcrumbsSeparator;
export default Breadcrumbs;
