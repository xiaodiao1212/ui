/** @jsxImportSource @emotion/react */

import React from 'react';
import { ComponentBaseProps } from '../props';
import { useCSS, useTheme, useThemedCSS } from '../../styles/css';
import { Theme } from '../../styles/themes';
import vars from '../../styles/vars';

type TabsProps = ComponentBaseProps & {
  noIndicator?: boolean;
  onClickTab: (key: React.Key) => void;
  tab: React.Key;
};

type TabItemProps = ComponentBaseProps &
  Partial<{
    noIndicator: boolean;
    indicator: React.ReactNode;
    tab: Readonly<React.Key>;
    tabKey: React.Key;
    onClick: (key: React.Key) => void;
    css: (theme: Theme, isCurrentTab: boolean) => React.CSSProperties;
  }>;

type TabsIndicatorProps = ComponentBaseProps;

const Tabs = ({
  onClickTab,
  noIndicator = false,
  tab,
  css,
  children,
  ...props
}: React.ComponentPropsWithoutRef<'div'> & TabsProps) => {
  const theme = useTheme();

  const handleChildrenRender = () => {
    return React.Children.map(children, (child: any, i) => {
      const element = child as React.DetailedReactHTMLElement<any, HTMLElement>;
      console.log(element);

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
        ...useThemedCSS(theme, css),
      })}
      {...props}>
      {typeof children === 'function' && children(renderTab)}
      {children instanceof Array && handleChildrenRender()}
    </nav>
  );
};

const TabItem = ({ tab, tabKey, onClick, noIndicator, indicator, css, children, ...props }: TabItemProps) => {
  const theme = useTheme();
  const tabsIndicatorStyles = useCSS({
    position: 'relative',
    flex: 1,
    textAlign: 'center',
    ...(typeof css == 'function' && css(theme, tab == tabKey)),
  });

  const handleClickTab = () => {
    onClick?.(tabKey as React.Key);
  };

  return (
    <div css={tabsIndicatorStyles} onClick={handleClickTab} {...props}>
      {children}
      {tab == tabKey && !noIndicator && (indicator || <TabsIndicator />)}
    </div>
  );
};

const TabsIndicator = ({ css, className, ...props }: React.ComponentPropsWithoutRef<'span'> & TabsIndicatorProps) => {
  const theme = useTheme();
  const tabsIndicatorStyles = useCSS({
    position: 'absolute',
    height: '1px',
    background: 'white',
    bottom: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    ...useThemedCSS(theme, css),
  });

  return <span css={tabsIndicatorStyles} {...props} />;
};

Tabs.Item = TabItem;
Tabs.Indicator = TabsIndicator;
export default Tabs;
