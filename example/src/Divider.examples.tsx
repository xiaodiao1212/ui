import { useState } from 'react';
import { Container, Divider } from '../build';
import Example from './common/Example';
const DividerExamples = () => {
  return (
    <Container pa='1em'>
      <Example title='Default' desc=''>
        <Divider />
      </Example>
      <Example title='Size' desc=''>
        <Divider size={1} />
        <Divider size={2} />
        <Divider size={3} />
        <Divider size={4} />
        <Divider size={5} />
      </Example>
      <Example title='Type' desc=''>
        <Divider dashed size={2} />
      </Example>
      <Example title='Color' desc=''>
        <Divider color='#f69d3c' />
        <Divider color='#3f87a6' />
      </Example>
      <Example title='Text' desc=''>
        <Divider>line</Divider>
        <Divider>
          <div
            style={{
              color: 'red',
            }}>
            back
          </div>
        </Divider>
      </Example>
      <Example title='Vertical' desc=''>
        <Divider vertical size={3} dashed />
        <Divider vertical size={5} color='red' />
        <Divider
          vertical
          size={4}
          css={{
            height: '5em',
            '& > .css-u73vd5-Divider': {
              color: 'red',
            },
          }}>
          142
        </Divider>
      </Example>
    </Container>
  );
};

export default DividerExamples;
