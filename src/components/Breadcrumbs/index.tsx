/** @jsxImportSource @emotion/react */

import { css, useTheme } from '@emotion/react';
import { Theme } from '../../styles/themes';
import React from 'react';
import { Base } from '../props';

type BreadcrumbsItem = Partial<{
  link: boolean;
  title: string;
  onClick: () => any;
}>;
type BreadcrumbsProps = Base &
  Partial<{
    divider: React.ReactNode;
    items: BreadcrumbsItem[];
  }>;

const Breadcrumbs = ({ divider = '/', items = [], className, co }: BreadcrumbsProps) => {
  const theme = useTheme() as Theme;
  const sliderStyles = css({
    display: 'inline-flex',
    alignItems: 'center',
    '& > *': {
      display: 'inline-flex',
    },
    ...(co && (typeof co == 'function' ? co(theme) : co)),
  });

  return (
    <nav css={sliderStyles} className={'breadcrumbs ' + className}>
      {items.map((v, i) => {
        return (
          <div key={v.title}>
            <div onClick={v?.onClick}>{v.title}</div>
            {i != items.length - 1 &&
              (typeof divider == 'string' ? (
                <div
                  style={{
                    margin: '0em .4em',
                  }}>
                  {divider}
                </div>
              ) : (
                divider
              ))}
          </div>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;
