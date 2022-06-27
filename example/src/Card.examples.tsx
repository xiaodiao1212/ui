import { useState } from 'react';
import { Container, Button } from '../build';
import APITable, { APIs } from './APITable';
import Example from './Example';

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
        <Button>submit</Button>
        <Button outlined>ok</Button>
        <Button text>fine</Button>
      </Example>
      <Example title='color' desc=''>
        <Button color='linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c)'>submit</Button>
        <Button
          outlined
          css={{
            background: '#f4f7f8',
          }}>
          ok
        </Button>
        <Button text color='red'>
          fine
        </Button>
      </Example>
      <Example title='shape' desc=''>
        <Button>submit</Button>
        <Button radius='4px'>submit</Button>
        <Button rounded>ok</Button>

        <Button outlined rounded>
          rounded
        </Button>
        <Button icon>icon</Button>
        <Button rounded icon>
          icon
        </Button>
      </Example>
      <Example title='size' desc=''>
        <Button>normal</Button>
        <Button disabled padding='.2em 1em'>
          disabled
        </Button>

        <Button outlined padding='.4em 1.2em'>
          outlined
        </Button>
        <Button text padding='.6em 1.4em'>
          text
        </Button>
      </Example>
      <Example title='disabled' desc=''>
        <Button disabled>ok</Button>
        <Button rounded disabled>
          ok
        </Button>
        <Button outlined disabled>
          ok
        </Button>
        <Button outlined rounded disabled>
          rounded
        </Button>

        <Button text disabled>
          ok
        </Button>
      </Example>
      <Example title='full-width' desc=''>
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '1em' }}>
          <Button block>submit</Button>
          <Button block rounded>
            submit
          </Button>
          <Button block rounded disabled>
            submit
          </Button>
          <Button outlined block>
            submit
          </Button>
          <Button outlined radius='4px' block>
            submit
          </Button>
          <Button text block>
            submit
          </Button>
        </div>
      </Example>
      <APITable apis={apis} />
    </Container>
  );
};

export default ButtonExamples;
