import { useState } from 'react';
import { Col as DefaultCol, Container, Row, Button } from '../build';
import APITable, { APIs } from '../APITable';
import Example from '../Example';
const Col = ({ children }: any) => <DefaultCol left>{children}</DefaultCol>;
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
      <Example title='Default & Disabled' desc=''>
        <Row gap='1em'>
          <Col>
            <Button
              css={
                {
                  background: 'red',
                  '&>div': {
                    color: 'red',
                  },
                } as any
              }>
              ok
            </Button>
          </Col>
        </Row>
      </Example>

      <APITable apis={apis} />
    </Container>
  );
};

export default ButtonExamples;
