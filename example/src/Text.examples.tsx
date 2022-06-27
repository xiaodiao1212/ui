import { useState } from 'react';
import { Container, Text } from '../build';
import Example from './common/Example';
const ContainerExamples = () => {
  return (
    <Container pa='1em'>
      <Example title='Default' desc=''>
        <Text>123</Text>
      </Example>
      <Example title='Size' desc=''>
        <Text size={1}>123</Text>
        <Text size={1.2}>123</Text>
        <Text size={1.5}>123</Text>
        <Text size={2}>123</Text>
      </Example>
      <Example title='Weight' desc=''>
        <Text thin>123</Text>
        <Text blod>123</Text>
        <Text>123</Text>
      </Example>
      <Example title='maxLength & ellipsis' desc=''>
        <Text maxLength={10}>1234444444444</Text>
        <Text maxLength={10} ellipsis='.e.g'>
          1234444444444
        </Text>
      </Example>
      <Example title='Color' desc=''>
        <Text color='red'>123</Text>
        <Text color='blue'>123</Text>
        <Text color='green'>123</Text>
      </Example>
      <Example title='Gradient' desc=''>
        <Text gradient='linear-gradient(#e66465, #9198e5)'>123</Text>
      </Example>
    </Container>
  );
};

export default ContainerExamples;
