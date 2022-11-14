/** @jsxImportSource @emotion/react */

import {
  createContext,
  Children,
  CSSProperties,
  cloneElement,
  ComponentPropsWithoutRef,
  DetailedReactHTMLElement,
} from 'react';
import { ComponentBaseProps } from '../props';
import { useCSS, useTheme, useThemedCSS } from '../../styles/css';
import { Theme } from '../../styles/themes';
import vars from '../../styles/vars';

type TabsProps = ComponentBaseProps & {
  noIndicator?: boolean;
  onChange: (key: string) => void;
  tab: React.Key;
};

type TabItemProps = ComponentBaseProps &
  Partial<{
    noIndicator: boolean;
    indicator: React.ReactNode;
    tab: Readonly<React.Key>;
    tabKey: React.Key;
    onClick: (key: React.Key) => void;
    css: (theme: Theme, isCurrentTab: boolean) => CSSProperties;
  }>;

type TabsIndicatorProps = ComponentBaseProps;

const Tabs = ({
  onChange,
  noIndicator = false,
  tab,
  css,
  children,
  ...props
}: ComponentPropsWithoutRef<'div'> & TabsProps) => {
  const context = createContext({});
  const theme = useTheme();
  const styles = useCSS({
    display: 'flex',
    ...useThemedCSS(theme, css),
  });

   return (
    <div css={styles} {...props}>
      {Children.map(children, (child: any, i) => {
        const element = child as DetailedReactHTMLElement<any, HTMLElement>;
        console.log('1' + i, element);

        if (child.type.name == 'TabItem') {
          return cloneElement(element, {
            onClick: () => {
              onChange?.('1');
            },
            tab: tab,
            tabKey: element.key,
            noIndicator: noIndicator,
            indicator: Children.map(children, (c: any, i) => {
              if (c.type.name == 'TabsIndicator') return c;
            })[0],
            ...{ ...element.props, key: element.key },
          });
        }
        return undefined;
      })}
    </div>
  );
};

const TabsItem = ({ tab, tabKey, onClick, noIndicator, indicator, css, children, ...props }: TabItemProps) => {
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

Tabs.Item = TabsItem;
Tabs.Indicator = TabsIndicator;
export default Tabs;
