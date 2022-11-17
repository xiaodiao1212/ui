/** @jsxImportSource @emotion/react */

import { ComponentBaseProps, Themed } from '../props';
import vars from '../../styles/vars';
import { useThemedCSS, useCSS, useTheme } from '../../styles/css';
type CardProps = ComponentBaseProps &
  Partial<{
    color: Themed<string>;
  }>;

type CardHeaderProps = ComponentBaseProps &
  Partial<{
    title: React.ReactNode;
    extra: React.ReactNode;
  }>;
type CardBodyProps = ComponentBaseProps;
type CardFooterProps = ComponentBaseProps;
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
const Card = ({ css, children, onClick, color, ...props }: CardProps) => {
  const theme = useTheme();

  const styles = useCSS({
    textAlign: 'initial',
    display: 'flex',
    padding: '1em',
    flexDirection: 'column',
    background: color ? (typeof color == 'function' ? color?.(theme) : color) : theme.color.white,

    ...useThemedCSS(theme, css),
  });

  const handleClickCard = () => {
    onClick?.();
  };

  return (
    <article css={styles} onClick={handleClickCard} {...props}>
      {children}
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

  return (
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
    display: 'flex',
    '& > *': {
      marginLeft: 'auto',
    },
    '& > *:first-of-type': {
      marginLeft: '0',
    },
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
