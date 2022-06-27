import { useState } from 'react';
import { Container, Divider } from '../build';
import Example from './common/Example';
const ContainerExamples = () => {
  return (
    <Container pa='1em'>
      <Example title='Default' desc=''>
        <Container />
      </Example>
      <Example title='Size' desc=''>
        <>
          <Divider size={1} />
        </>

        <Divider size={2} />
        <Divider size={3} />
        <Divider size={4} />
        <Divider size={5} />
      </Example>
      <Example title='Type' desc=''>
        <Divider dashed />
      </Example>
      <Example title='Color' desc=''>
        <Divider color='#f69d3c' />
        <Divider color='#3f87a6' />
      </Example>
      <Example title='Text' desc=''>
        <Divider>line</Divider>
        <Divider>
          <span
            style={{
              color: 'red',
            }}>
            back
          </span>
        </Divider>
      </Example>
    </Container>
  );
};

export default ContainerExamples;
