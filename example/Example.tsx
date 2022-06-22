import { useState } from 'react';
import { Container, Row } from './build';

const Example = ({ title, desc, gap = '1em', children }: any) => {
  return (
    <Container css={{ marginBottom: '2em' }}>
      <Row
        css={{
          margin: '.5em 0',
          fontSize: '2em',
          fontWeight: 'blod',
        }}>
        {title}
      </Row>
      <Row
        css={t => ({
          color: t.color.grey,
          margin: '.5rem 0',
        })}>
        {desc}
      </Row>
      <Container
        pa='1em'
        css={{
          border: '2px solid #ECEBED',
          borderRadius: '8px',
        }}>
        <Row gap={gap}>{children}</Row>
      </Container>
    </Container>
  );
};

export default Example;
