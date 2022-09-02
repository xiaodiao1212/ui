import { useState } from 'react';
import { Container } from '../build';
import Example from './common/Example';
const ContainerExamples = () => {
  return (
    <Container pa='1em'>
      <Example title='Default' desc=''>
        <Container></Container>
      </Example>
      <Example title='Size' desc=''>
        <Container />
      </Example>
      <Example title='Type' desc=''>
        <Container />
      </Example>
      <Example title='Color' desc=''>
        <Container />
      </Example>
      <Example title='Text' desc=''>
        <Container />
      </Example>
    </Container>
  );
};

export default ContainerExamples;
