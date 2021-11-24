/** @jsxImportSource @emotion/react */

import { Theme } from '../../constants/theme';
import React from 'react';
import clsx from 'clsx';
import { useTheme, css } from '@emotion/react';
import Row from '../Row';
import Col from '../Col';
type TabBarItem = {
  icon: React.ReactNode;
  text: string;
  selected: boolean;
  onClick?: (item: TabBarItem) => any;
  render?: (item: TabBarItem) => React.ReactNode;
};
type TabBarProps = {
  items: TabBarItem[];
  className?: string;
  co?: ((theme: Theme) => React.CSSProperties) | React.CSSProperties;
};

const TabBar = ({ items, co, className, ...props }: TabBarProps) => {
  const theme = useTheme() as Theme;
  const styles = css({
    ...(typeof co == 'function' && co(theme)),
  });
  const computedClassNames = clsx(className);
  const renderDefaultTabBarItem = (item: TabBarItem) => {
    <Row
      vertical
      onClick={() => {
        item.onClick && item.onClick(item);
      }}>
      {item.icon && <Col>{item.icon}</Col>}
      <Col>{item.text}</Col>
    </Row>;
  };
  return (
    <div css={styles} className={computedClassNames} {...props}>
      {items.map(v => (v.render ? v.render(v) : renderDefaultTabBarItem(v)))}
    </div>
  );
};

export default TabBar;
