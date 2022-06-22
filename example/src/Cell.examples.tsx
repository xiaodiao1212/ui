import APITable, { APIs } from '../APITable';
import { Cell, Col, Container, Row } from '../build';
import Left from '../Left';
import Example from '../Example';
import { useState } from 'react';
const apis: APIs = [
  {
    attributes: 'title',
    type: 'React.ReactNode',
    acceptedValues: '-',
    description: "cell's title or the key ",
    defaultValue: '-',
  },
  {
    attributes: 'extra',
    type: 'React.ReactNode',
    acceptedValues: '-',
    description: "cell's extra info or the value",
    defaultValue: '-',
  },
];
const LinkExamples = () => {
  const [title, setTitle] = useState('1212');
  const [center, setCenter] = useState(false);
  return (
    <Container pa='1em'>
      <Example title='Default' desc=''>
        <Row vertical>
          <Col css={{ width: '100%' }}>
            <Cell
              centered={center}
              title={'name'}
              value='kasjflakfjalskf'
              onClick={() => {
                setTitle('33333');
                setCenter(v => !v);
              }}
            />
          </Col>
          <Col css={{ width: '100%' }}>
            <Cell
              centered={center}
              title={'name'}
              value='qwrqwrqwrqwr'
              onClick={() => {
                setTitle('33333');
                setCenter(v => !v);
              }}
            />
          </Col>
        </Row>
      </Example>

      <APITable apis={apis} />
    </Container>
  );
};

export default LinkExamples;
