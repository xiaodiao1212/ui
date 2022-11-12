/** @jsxImportSource @emotion/react */

import { Theme } from '../../styles/themes';
import { ComponentBaseProps, Themed } from '../props';
import vars from '../../styles/vars';
import { useThemedCSS, useCSS, useTheme } from '../../styles/css';
type CardProps = ComponentBaseProps &
  Partial<{
    title: React.ReactNode;
    extra: React.ReactNode;
    color: Themed<string>;
  }>;
/**
 * Card is a container for text, photos, and actions in the context of a single subject.
 * ```js
 * <Card css={{ mw: "400px" }}>
      <Card.Body>
        <Text>A basic card</Text>
      </Card.Body>
    </Card>
 * ```
 * @param title card header title
 * @param extra card header extra operators
 */
const Card = ({ title, extra, css, children, onClick, color, ...props }: CardProps) => {
  const theme = useTheme();

  const styles = useCSS({
    textAlign: 'initial',
    display: 'flex',
    padding: '1em',
    flexDirection: 'column',
    background: color ? (typeof color == 'function' ? color?.(theme) : color) : theme.color.white,
    '& > header': {
      display: 'flex',
      '& > *': {
        marginLeft: 'auto',
      },
      '& > *:first-of-type': {
        marginLeft: '0',
      },
    },
    ...useThemedCSS(theme, css),
  });

  const handleClickCard = () => {
    onClick?.();
  };

  return (
    <article css={styles} onClick={handleClickCard} {...props}>
      {(title || extra) && (
        <header>
          <div>{title}</div>
          <div>{extra}</div>
        </header>
      )}
      <div>{children}</div>
    </article>
  );
};

export default Card;
