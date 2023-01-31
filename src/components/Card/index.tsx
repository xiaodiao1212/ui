/** @jsxImportSource @emotion/react */

import { ComponentBaseProps, Themed } from '../props';
import vars from '../../styles/vars';
import { useThemedCSS, useCSS, useTheme, useThemedValue } from '../../styles/css';
import { Children, DetailedReactHTMLElement, cloneElement } from 'react';
type CardProps = ComponentBaseProps & {
  color?: Themed<string>;
};

type CardHeaderProps = ComponentBaseProps &
  Partial<{
    title: React.ReactNode;
    extra: React.ReactNode;
  }>;
type CardBodyProps = ComponentBaseProps & {};
type CardFooterProps = ComponentBaseProps & {};
/**
 * Card is a container for text, photos, and actions in the context of a single subject.
 * ```js
 * <Card css={{ mw: "400px" }}>
      <Card.Body>
        <Text>A basic card</Text>
      </Card.Body>
    </Card>
 * ```
 */
const Card = ({ css, children, color, ...props }: CardProps) => {
  const theme = useTheme();

  const styles = useCSS({
    textAlign: 'initial',
    display: 'flex',
    padding: '1em',
    flexDirection: 'column',
    background: color ? useThemedValue(theme, color) : theme.color.white || vars.color.white,
    ...useThemedCSS(theme, css),
  });

  return (
    <article css={styles} {...props}>
      {Children.map(children, (child: any, i) => {
        const element = child as DetailedReactHTMLElement<any, HTMLDivElement>;
        if (['CardHeader', 'CardFooter', 'CardBody'].includes(child.type.name)) {
          return cloneElement(element, {
            ...{ ...element.props },
          });
        }
        return undefined;
      })}
    </article>
  );
};
const CardHeader = ({ title, extra, css, children, ...props }: CardHeaderProps) => {
  const theme = useTheme();
  const styles = useCSS({
    display: 'flex',
    '& > *': {
      marginLeft: 'auto',
    },
    '& > *:first-of-type': {
      marginLeft: '0',
    },
    ...useThemedCSS(theme, css),
  });

  return children ? (
    children
  ) : (
    <div css={styles} {...props}>
      <div>{title}</div>
      <div>{extra}</div>
    </div>
  );
};
const CardBody = ({ css, children, ...props }: CardBodyProps) => {
  const theme = useTheme();
  const styles = useCSS({
    ...useThemedCSS(theme, css),
  });

  return (
    <div css={styles} {...props}>
      {children}
    </div>
  );
};
const CardFooter = ({ css, children, ...props }: CardFooterProps) => {
  const theme = useTheme();
  const styles = useCSS({
    ...useThemedCSS(theme, css),
  });

  return (
    <div css={styles} {...props}>
      {children}
    </div>
  );
};

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;
export default Card;
