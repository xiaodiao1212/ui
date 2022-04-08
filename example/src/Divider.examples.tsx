import { useState } from 'react';
import { App, Divider, Col, Container, Row } from '../build';
import Example from '../Example';
const ButtonExamples = () => {
  const [on, setOn] = useState(true);

  return (
    <Container pa='1em'>
      <Example title='Download' desc='Generate a switch element easily with beautiful animations and functionality'>
        <Row justifyContent='center'>
          <Col>
            <Divider />
          </Col>
        </Row>
      </Example>
      <Example title='Href' desc='Generate a switch element easily with beautiful animations and functionality'>
        <Row justifyContent='center'>
          <Col>
            <Divider />
          </Col>
        </Row>
      </Example>
      <Example title='Anchor' desc='Generate a switch element easily with beautiful animations and functionality'>
        <Row justifyContent='center'>
          <Col>
            <Divider />
          </Col>
        </Row>
      </Example>
      <Example title='Back Top' desc='Generate a switch element easily with beautiful animations and functionality'>
        <Row justifyContent='center'>
          <Col>
            <Divider />
          </Col>
        </Row>
      </Example>
    </Container>
  );
};

export default ButtonExamples;
