import { useState } from 'react';
import { App, Link, Col, Container, Row, Divider } from '../build';
import Center from '../Left';
import Example from '../Example';
const DividerExamples = () => {
  return (
    <Container pa='1em'>
      <Example
        title='Default'
        desc='The Link component allows you to easily customize anchor elements with your theme colors and indicator
      styles.'>
        <Center>
          <Divider />
        </Center>
      </Example>
      <Example title='Target' desc='Jump to a link (modify target to change the opening method)'>
        <Center>
          <Divider />
        </Center>
      </Example>
      <Example
        title='Download'
        desc='Let the href address become download instead of open, and also have the function of renaming'>
        <Center>
          <Divider />
        </Center>
      </Example>
      <Example title='Indicator' desc='Use props such as indicator XX to change the underline style'>
        <Center>
          <Divider />
        </Center>
      </Example>
    </Container>
  );
};

export default DividerExamples;
