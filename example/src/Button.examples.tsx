import { App, Button, Col, Container, Row } from '../build';

const ButtonExamples = () => {
  return (
    <App>
      <Container pa='1em'>
        <Row>
          <Col>
            <Button>default</Button>
          </Col>
          <Col>
            <Button text>text</Button>
          </Col>
          <Col>
            <Button rounded>rounded</Button>
          </Col>

          <Col>
            <Button outlined>outlinedd</Button>
          </Col>
        </Row>
      </Container>
      <Container pa='1em'>
        <Row>
          <Col>
            <Button disabled>default</Button>
          </Col>
          <Col>
            <Button text disabled>
              text
            </Button>
          </Col>
          <Col>
            <Button rounded disabled>
              rounded
            </Button>
          </Col>

          <Col>
            <Button disabled outlined>
              outlinedd
            </Button>
          </Col>
        </Row>
      </Container>
    </App>
  );
};

export default ButtonExamples;
