/** @jsxImportSource @emotion/react */

import { Theme } from '../../constants/theme';
import React from 'react';
import clsx from 'clsx';
import { useTheme, css } from '@emotion/react';
import Col from '../Col';
import Row from '../Row';

type CardProps = Partial<{
  title: React.ReactNode;
  extra: React.ReactNode;
  co?: ((theme: Theme) => React.CSSProperties) | React.CSSProperties;
}>;

const Card = ({
  title,
  extra,
  co,
  className,
  children,
  ...props
}: CardProps & React.ComponentPropsWithoutRef<'article'>) => {
  const theme = useTheme() as Theme;
  const computedClassNames = clsx(className);
  const styles = css({
    '& > header': title && {
      display: 'flex',
    },
    ...(typeof co == 'function' && co(theme)),
  });

  return (
    <article css={styles} className={computedClassNames} {...props}>
      <header>
        <Row>
          <Col>{title}</Col>
          <Col autoMargin>{extra}</Col>
        </Row>
      </header>
      {children}
    </article>
  );
};

export default Card;
