/** @jsxImportSource @emotion/react */

import { Theme } from '../../constants/theme';
import React from 'react';
import clsx from 'clsx';
import { useTheme, css } from '@emotion/react';
import SegmentItem from './SegmentItem';
type SegmentProps = Partial<{
  vertical: boolean;
  co?: ((theme: Theme) => React.CSSProperties) | React.CSSProperties;
}>;

const Segment = ({ co, children, className, ...props }: React.ComponentPropsWithoutRef<'div'> & SegmentProps) => {
  const [fragmentLength, setFragmentLength] = React.useState(100 / (children as any).length);
  const [offsetX, setOffsetX] = React.useState(0);
  const [left, setLeft] = React.useState(0);
  const [current, setCurrent] = React.useState(0);
  const theme = useTheme() as Theme;
  const styles = css({
    height: '2em',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    borderRadius: '4px',
    background: theme.color.greyLight,
    '& > div': {
      display: 'flex',
      alignItems: 'center',
      position: 'absolute',
      width: '100%',
      top: 0,
      bottom: 0,
      left: 0,
    },
    '& > div:first-of-type': {
      boxShadow: `0px 0px 4px 0px ${theme.shadow.color}`,
      borderRadius: '4px',
      width: `calc(${fragmentLength}% - ${offsetX}px)`,
      top: '4px',
      bottom: '4px',
      transform: `translateX(calc(${current == 0 ? offsetX : 100 * current}% + ${offsetX * current}px))`,
      background: theme.color.white,
      transition: '.3s all',
    },
    ...(co && (typeof co == 'function' ? co(theme) : co)),
  });
  const computedClassNames = clsx(className);
  const handleChildrenRender = () => {
    return React.Children.map(children, (child: any, i) => {
      const element = child as React.DetailedReactHTMLElement<any, HTMLElement>;
      if (child.type.name == 'SegmentItem') {
        return React.cloneElement(element, {
          onClickItem: (key: any) => {
            setCurrent(key);
          },
          itemkey: i,
          currentKey: current,
        });
      }
      return undefined;
    });
  };
  React.useEffect(() => {
    if (current == 0) {
      setOffsetX(4);
      setLeft(4);
    } else if (current == (children as any).length - 1) {
      setOffsetX(4);
      setLeft(0);
    } else {
      setOffsetX(0);
      setLeft(0);
    }
  }, [current]);
  return (
    <div css={styles} role='button' className={computedClassNames} {...props}>
      <div></div>
      {children instanceof Array && <div>{handleChildrenRender()}</div>}
    </div>
  );
};

Segment.Item = SegmentItem;

export default Segment;
