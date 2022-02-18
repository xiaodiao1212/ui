/** @jsxImportSource @emotion/react */
import clsx from 'clsx';
import { css, useTheme } from '@emotion/react';
import { Theme } from '../../constants/theme';
import * as React from 'react';

interface PopoverProps {
  hover?: boolean;
  co: ((theme: Theme) => React.CSSProperties) | React.CSSProperties;
}
interface PopoverContentProps {
  position?: 'top' | 'left' | 'right' | 'bottom';
  show?: boolean;
  co: ((theme: Theme) => React.CSSProperties) | React.CSSProperties;
}

/**
 * A Popover can be used to display some content on top of another.
 * @param boolean hover
 * @returns Popover
 */
const Popover = ({
  hover = false,
  co,
  children,
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'> & PopoverProps) => {
  const theme = useTheme() as Theme;
  const [isContentShow, setIsContentShow] = React.useState(false);
  const styles = css({
    position: 'relative',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    ...(co && (typeof co == 'function' ? co(theme) : co)),
  });
  const computedClassNames = clsx(className);
  const handleChildrenRender = () => {
    return React.Children.map(children, (child: any, i) => {
      const element = child as React.DetailedReactHTMLElement<any, HTMLElement>;
      if (child.type.name == 'PopoverContent') {
        return React.cloneElement(element, {
          show: isContentShow,
        });
      }
      return React.cloneElement(element, {
        ...(hover && {
          onMouseOver: () => {
            setIsContentShow(true);
          },
          onMouseOut: () => {
            setIsContentShow(false);
          },
        }),
        onFocus: () => {
          setIsContentShow(true);
        },
        onBlur: () => {
          setIsContentShow(false);
        },
      });
    });
  };
  return (
    <div css={styles} className={computedClassNames} {...props}>
      {handleChildrenRender()}
    </div>
  );
};
const PopoverContent = ({
  show = false,
  position = 'bottom',
  co,
  children,
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'> & PopoverContentProps) => {
  const theme = useTheme() as Theme;
  const [cp, setCp] = React.useState({});
  const styles = css({
    position: 'absolute',
    ...cp,
    display: show ? 'block' : 'none',

    ...(co && (typeof co == 'function' ? co(theme) : co)),
  });
  const [usePropsShow, setUsePropsShow] = React.useState(true);
  const handleMouseOver = (e: any) => {
    if (usePropsShow) setUsePropsShow(false);
  };
  const handleMouseOut = (e: any) => {
    setUsePropsShow(true);
  };
  const computedClassNames = clsx('popover-content', className);
  React.useEffect(() => {
    switch (position) {
      case 'top':
        setCp({
          top: 0,
          transform: 'translate3d(0,-105%,0)',
        });
        break;
      case 'left':
        setCp({
          left: 0,
          transform: 'translate3d(-105%,0,0)',
        });
        break;
      case 'bottom':
        setCp({
          bottom: 0,
          transform: 'translate3d(0,105%,0)',
        });
        break;
      case 'right':
        setCp({
          right: 0,
          transform: 'translate3d(105%,0,0)',
        });
        break;
      default:
        break;
    }
  }, [position]);
  return (
    <div
      css={styles}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      className={computedClassNames}
      {...props}>
      {children}
    </div>
  );
};

Popover.Content = PopoverContent;

export default Popover;
