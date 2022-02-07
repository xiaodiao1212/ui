import { useState } from 'react';
import * as ReactDOM from 'react-dom';
import { App, Center, Button, Col, Container, Row, Switch, Text, Chip, Badge, Card } from './build';
const Main = () => {
  const [on, setOn] = useState(false);
  return (
    <App>
      <Container pa='1em'>
        <Row>
          <Col>
            <Text>this is ui</Text>
          </Col>{' '}
          <Col>
            <Center>
              <Switch
                on={on}
                onChange={() => setOn(v => !v)}
                co={{
                  margin: '0 auto',
                }}
              />
            </Center>
          </Col>
        </Row>
      </Container>
      <Container pa='1em'>
        <Row>
          <Col>
            <Button outlined>this is ui</Button>
          </Col>
          <Col>
            <Button rounded>this is ui</Button>
          </Col>
        </Row>
      </Container>
      <Container pa='1em'>
        <Row>
          <Col>
            <Badge>
              <Button>this is ui</Button>
            </Badge>
          </Col>{' '}
          <Col>
            <Chip>this is chip</Chip>
          </Col>{' '}
        </Row>
      </Container>

      <Container pa='1em'>
        <Row gap='1em'>
          <Col>
            <Card title='this is card1' extra='133' color={t => t.color.grey} co={{ borderRadius: '4px' }}>
              this is content1
            </Card>
          </Col>{' '}
          <Col>
            <Card title='this is card2' extra='133' co={{ borderRadius: '4px' }}>
              this is content2
            </Card>
          </Col>{' '}
        </Row>
      </Container>
    </App>
  );
};

ReactDOM.render(<Main />, document.getElementById('root'));
