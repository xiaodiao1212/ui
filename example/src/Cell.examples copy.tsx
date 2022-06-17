import APITable, { APIs } from '../APITable';
import { Cell, Container } from '../build';
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
      <Example
        title='Default'
        desc='The Link component allows you to easily customize anchor elements with your theme colors and indicator
      styles.'>
        <Left>
          <Cell
            center={center}
            title={title}
            value='!3'
            onClick={() => {
              setTitle('33333');
              setCenter(v => !v);
            }}
            css={
              {
                '& section': {
                  background: 'red',
                },
              } as any
            }
          />
        </Left>
      </Example>

      <APITable apis={apis} />
    </Container>
  );
};

export default LinkExamples;
