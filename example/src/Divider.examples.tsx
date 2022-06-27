import { useState } from 'react';
import { App, Link, Col, Container, Row, Divider } from '../build';
import Example from './Example';
const DividerExamples = () => {
  return (
    <Container pa='1em'>
      <Example title='Default' desc=''>
        <Divider />
      </Example>
      <Example title='Target' desc=''>
        <Divider />
      </Example>
      <Example title='Download' desc=''>
        <Divider />
      </Example>
      <Example title='Indicator' desc=''>
        <Divider />
      </Example>
    </Container>
  );
};

export default DividerExamples;
