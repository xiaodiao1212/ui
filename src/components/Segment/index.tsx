/** @jsxImportSource @emotion/react */
import { Theme } from '../../styles/themes';
import { Base } from '../props';
import { Children, cloneElement, useEffect, useState } from 'react';
import { useFunctionLikeValue, useTheme, useCSS } from '../../styles/css';
import SegmentItem from './SegmentItem';

type SegmentProps = Base &
  Partial<{
    vertical: boolean;
  }>;

const Segment = ({ css, children, ...props }: SegmentProps) => {
  const [offsetX, setOffsetX] = useState(0);
  const [current, setCurrent] = useState(0);
  const theme = useTheme() as Theme;
  const styles = useCSS({
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
      width: `calc(${100 / (children as any).length}% - ${offsetX}px)`,
      top: '4px',
      bottom: '4px',
      transform: `translateX(calc(${current == 0 ? offsetX : 100 * current}% + ${offsetX * current}px))`,
      background: theme.color.white,
      transition: '.3s all',
    },
    ...useFunctionLikeValue(theme, css),
  });

  const handleChildrenRender = () => {
    return Children.map(children, (child: any, i) => {
      const element = child as React.DetailedReactHTMLElement<any, HTMLElement>;
      if (child.type.name == 'SegmentItem') {
        return cloneElement(element, {
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

  useEffect(() => {
    if (current == 0) {
      setOffsetX(4);
    } else if (current == (children as any).length - 1) {
      setOffsetX(4);
    } else {
      setOffsetX(0);
    }
  }, [current]);
  return (
    <div css={styles} role='button' {...props}>
      <div></div>
      {children instanceof Array && <div>{handleChildrenRender()}</div>}
    </div>
  );
};

Segment.Item = SegmentItem;

export default Segment;
