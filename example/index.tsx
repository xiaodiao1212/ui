import { useState } from 'react';
import * as ReactDOM from 'react-dom';
import { App, Col, Container, Row, Switch, Text } from './build';
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
          </Col>{' '}
        </Row>
      </Container>
    </App>
  );
};

ReactDOM.render(<Main />, document.getElementById('root'));
