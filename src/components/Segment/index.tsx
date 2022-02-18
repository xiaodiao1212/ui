/** @jsxImportSource @emotion/react */

import { Theme } from '../../constants/theme';
import React from 'react';
import clsx from 'clsx';
import { useTheme, css } from '@emotion/react';

type SegmentProps = Partial<{
  vertical: boolean;
  co?: ((theme: Theme) => React.CSSProperties) | React.CSSProperties;
}>;
type SegmentItemProps = Partial<{
  itemkey: React.Key | null | undefined;
  currentKey: React.Key | null | undefined;
  onClickItem: (key: React.Key | null | undefined) => void;
  co?: ((theme: Theme) => React.CSSProperties) | React.CSSProperties;
}>;

const Segment = ({ co, children, className, ...props }: React.ComponentPropsWithoutRef<'div'> & SegmentProps) => {
  const fragmentLength = React.useRef(100 / (children as any).length);

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
    '& > div:first-child': {
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

const SegmentItem = ({
  itemkey,
  currentKey,
  onClickItem,
  co,
  children,
  className,
}: React.ComponentPropsWithoutRef<'div'> & SegmentItemProps) => {
  const theme = useTheme() as Theme;
  const styles = css({
    padding: '0 .4em',
    flex: 1,
    textAlign: 'center',
    color: itemkey == currentKey ? theme.color.primary : theme.color.grey,
    transition: '.3s all',
    fontWeight: itemkey == currentKey ? 700 : 500,
    ...(co && (typeof co == 'function' ? co(theme) : co)),
  });
  const computedClassNames = clsx(className);
  const handleClickSegmentItem = () => {
    onClickItem?.(itemkey);
  };

  return (
    <div css={styles} className={computedClassNames} onClick={handleClickSegmentItem}>
      {children}
    </div>
  );
};

Segment.Item = SegmentItem;

export default Segment;
