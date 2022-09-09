/** @jsxImportSource @emotion/react */

import { Theme } from '../../styles/themes';
import { Base, Themed } from '../props';
import vars from '../../styles/vars';
import { useThemedCSS, useCSS, useTheme } from '../../styles/css';
type CardProps = Base &
  Partial<{
    title: React.ReactNode;
    extra: React.ReactNode;
    color: Themed<string>;
  }>;

const Card = ({ title, extra, css, children, onClick, color, ...props }: CardProps) => {
  const theme = useTheme() as Theme;

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
