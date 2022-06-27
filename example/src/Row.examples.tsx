import { useState } from 'react';
import { Container, Row, Col } from '../build';
import Example from './common/Example';
const ContainerExamples = () => {
  return (
    <Container pa='1em'>
      <Example title='Default' desc=''>
        <Row></Row>
      </Example>
      <Example title='Size' desc=''>
        <Row></Row>
      </Example>
      <Example title='Type' desc=''>
        <Row></Row>
      </Example>
      <Example title='Color' desc=''>
        <Row></Row>
      </Example>
      <Example title='Text' desc=''>
        <Row></Row>
      </Example>
    </Container>
  );
};

export default ContainerExamples;
