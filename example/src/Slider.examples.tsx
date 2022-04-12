import { useState } from 'react';
import { Slider, Col as DefaultCol, Container, Row } from '../build';
import APITable, { APIs } from '../APITable';
import Example from '../Example';
const Col = ({ children }: any) => <DefaultCol left>{children}</DefaultCol>;
const apis: APIs = [
  {
    attributes: 'on',
    type: 'boolean',
    acceptedValues: 'true/false',
    description: 'turn on or not',
    defaultValue: 'false',
  },
  {
    attributes: 'disabled',
    type: 'boolean',
    acceptedValues: 'true/false',
    description: 'Disable switch',
    defaultValue: 'false',
  },
  {
    attributes: 'onChange',
    type: '(e:SwitchEvent) => void',
    acceptedValues: '-',
    description: 'The callback invoked when the on state of the switch changes',
    defaultValue: '-',
  },
];

const SwitchExamples = () => {
  const [on, setOn] = useState(true);
  return (
    <Container pa='1em'>
      <Example
        title='Default or Disabled'
        desc='Generate a switch element easily with beautiful animations and functionality'>
        <Row gap='1em'>
          <Col>
            <Slider />
          </Col>
        </Row>
      </Example>
      <h1 style={{ marginBottom: '1em' }}>Props</h1>
      <APITable apis={apis} />
    </Container>
  );
};

export default SwitchExamples;
