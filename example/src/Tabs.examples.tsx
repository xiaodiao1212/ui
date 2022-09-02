import { useState } from 'react';
import { Container, Tabs } from '../build';
import APITable, { APIs } from './common/APITable';
import Example from './common/Example';

const apis: APIs = [
  {
    attributes: 'on',
    type: 'boolean',
    acceptedValues: 'true/false',
    description: '是否处于打开状态',
    defaultValue: 'false',
  },
];

const ButtonExamples = () => {
  return (
    <Container pa='1em'>
      <Example title='base' desc=''>
        <Tabs></Tabs>
      </Example>

      <APITable apis={apis} />
    </Container>
  );
};

export default ButtonExamples;
