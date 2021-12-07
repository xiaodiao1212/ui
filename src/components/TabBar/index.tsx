/** @jsxImportSource @emotion/react */

import { Theme } from '../../constants/theme';
import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { useTheme, css } from '@emotion/react';
import Row from '../Row';
import Col from '../Col';
type TabBarItem = Partial<{
  icon: React.ReactNode;
  text: string;
  current: boolean;
  onClick?: (currItem: TabBarItem, items: TabBarItem[]) => any;
  render?: (item: TabBarItem) => React.ReactNode;
}>;
type TabBarProps = {
  items: TabBarItem[];
  vertical?: boolean;
  className?: string;
  co?: ((theme: Theme) => React.CSSProperties) | React.CSSProperties;
};

const TabBar = ({ items = [], vertical = false, co, className, ...props }: TabBarProps) => {
  const [tabs, setTabs] = useState(items);
  const theme = useTheme() as Theme;
  const styles = css({
    ...(typeof co == 'function' ? co(theme) : co),
  });
  const computedClassNames = clsx(className);
  const defaultRenderer = (item: TabBarItem, index: number) => {
    <Row
      vertical
      onClick={() => {
        const currTabs = tabs.map((v, i) => ({ ...v, current: i == index }));
        item.onClick?.(item, currTabs);
        setTabs(currTabs);
      }}>
      {item.icon && <Col>{item.icon}</Col>}
      <Col>{item.text}</Col>
    </Row>;
  };

  useEffect(() => {
    setTabs(items);
  }, [items]);
  return (
    <div css={styles} className={computedClassNames} {...props}>
      {tabs.map((v, i) => (v.render ? v.render(v) : defaultRenderer(v, i)))}
    </div>
  );
};

export default TabBar;
