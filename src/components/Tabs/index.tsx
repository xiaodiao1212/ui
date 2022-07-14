/** @jsxImportSource @emotion/react */

import * as React from 'react';
import { Base } from '../props';
import { useCSS, useTheme, useFunctionLikeValue } from '../../styles/css';
import { Theme } from '../../styles/themes';
import vars from '../../styles/vars';
import Button from '../Button';

type TabsProps = Base & {
  noIndicator?: boolean;
  onClickTab: (key: React.Key) => void;
  tab: React.Key;
};

type TabItemProps = Base &
  Partial<{
    noIndicator: boolean;
    indicator: React.ReactNode;
    tab: Readonly<React.Key>;
    tabKey: React.Key;

    onClick: (key: React.Key) => void;
    css: (theme: Theme, isCurrentTab: boolean) => React.CSSProperties;
  }>;

type TabsIndicatorProps = Base;

const Tabs = ({
  onClickTab,
  noIndicator = false,
  tab,
  css,
  children,
  ...props
}: React.ComponentPropsWithoutRef<'nav'> & TabsProps) => {
  const theme = useTheme() as Theme;

  const handleChildrenRender = () => {
    return React.Children.map(children, (child: any, i) => {
      const element = child as React.DetailedReactHTMLElement<any, HTMLElement>;
      if (child.type.name == 'TabItem') {
        return React.cloneElement(element, {
          onClick: () => {
            onClickTab?.(element.key || `${child.type.name}${i}`);
          },
          tab: tab,
          tabKey: element.key,
          noIndicator: noIndicator,
          indicator: React.Children.map(children, (c: any, i) => {
            if (c.type.name == 'TabsIndicator') return c;
          })[0],
          ...{ ...element.props, key: element.key },
        });
      }
      return undefined;
    });
  };
  const renderTab = (tab: React.ReactNode) => tab;
  return (
    <nav
      css={useCSS({
        display: 'flex',
        ...useFunctionLikeValue(theme, css),
      })}
      {...props}>
      {typeof children === 'function' && children(renderTab)}
      {children instanceof Array && handleChildrenRender()}
    </nav>
  );
};

const TabItem = ({ tab, tabKey, onClick, noIndicator, indicator, css, children, ...props }: TabItemProps) => {
  const theme = useTheme() as Theme;
  const tabsIndicatorStyles = useCSS({
    position: 'relative',
    flex: 1,
    textAlign: 'center',
    ...(typeof css == 'function' && css(theme, tab == tabKey)),
  });

  const handleClickTab = () => {
    onClick?.(tabKey as React.Key);
  };
  const tabCssOptions = (theme: Theme) => ({
    borderRadius: '',
    ...css?.(theme, tab == tabKey),
  });
  return (
    <Button {...props} css={tabsIndicatorStyles} onClick={handleClickTab} co={tabCssOptions}>
      {children}
      {tab == tabKey && !noIndicator && (indicator || <TabsIndicator />)}
    </Button>
  );
};

const TabsIndicator = ({ css, className, ...props }: React.ComponentPropsWithoutRef<'span'> & TabsIndicatorProps) => {
  const theme = useTheme() as Theme;
  const tabsIndicatorStyles = useCSS({
    position: 'absolute',
    height: '1px',
    background: 'white',
    bottom: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    ...useFunctionLikeValue(theme, css),
  });

  return <span css={tabsIndicatorStyles} {...props} />;
};

Tabs.Item = TabItem;
Tabs.Indicator = TabsIndicator;
export default Tabs;
