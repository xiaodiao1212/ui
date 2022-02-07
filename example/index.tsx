import { useState } from 'react';
import * as ReactDOM from 'react-dom';
import { App, Button, Col, Container, Row, Switch, Text, List, Badge, Card } from './build';
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
            <Switch on={on} onChange={() => setOn(v => !v)}></Switch>
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
            <Switch on={on} onChange={() => setOn(v => !v)}></Switch>
          </Col>{' '}
        </Row>
      </Container>

      <Container pa='1em'>
        <Row>
          <Col>
            <Card></Card>
          </Col>{' '}
        </Row>
      </Container>
    </App>
  );
};

ReactDOM.render(<Main />, document.getElementById('root'));
