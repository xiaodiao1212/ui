import { useState } from 'react';
import { Slider, Col as DefaultCol, Container, Row } from '../build';
import APITable, { APIs } from './APITable';
import Example from './Example';
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
const step = 1;
const min = 100;
const max = 708.23;
const l = [];
for (let i = min; i < max; i += step) {
  l.push(i);
}
l.push(max);
const SwitchExamples = () => {
  const [v, setV] = useState(max + '');
  return (
    <Container pa='1em'>
      <Example
        title='Default or Disabled'
        desc='Generate a switch element easily with beautiful animations and functionality'>
        <Row gap='1em'>
          <Col>
            {v}

            <Slider
              trackSize={4}
              thumbSize={30}
              max={max}
              min={min}
              step={step}
              value={v}
              defaultValue={max}
              onChange={v => ((v as unknown as number) * 1 + step > max ? setV(max + '') : setV(v))}
            />
          </Col>
        </Row>
      </Example>

      <APITable apis={apis} />
    </Container>
  );
};

export default SwitchExamples;
