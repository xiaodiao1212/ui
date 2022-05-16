import { useState } from 'react';
import { Col, Container, Row } from './build';

const Example = ({ title, desc, children }: any) => {
  return (
    <Container co={{ marginBottom: '2em' }}>
      <Row
        co={{
          margin: '.5em 0',
          fontSize: '2em',
          fontWeight: 'blod',
        }}>
        {title}
      </Row>
      <Row
        co={t => ({
          color: t.color.grey,
          margin: '.5rem 0',
        })}>
        {desc}
      </Row>
      <Container
        pa='1em'
        co={{
          borderRadius: '8px',
        }}>
        {children}
      </Container>
    </Container>
  );
};

export default Example;
