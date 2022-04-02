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
        co={{
          margin: '.5rem 0',
        }}>
        {desc}
      </Row>
      <Container
        pa='1em'
        background='white'
        co={{
          borderRadius: '8px',
        }}>
        <Row>
          <Col>{children}</Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Example;
