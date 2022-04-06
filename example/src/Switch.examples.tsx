import { useState } from 'react';
import { App, Switch, Col, Container, Row } from '../build';
import Example from '../Example';
const ButtonExamples = () => {
  const [on, setOn] = useState(true);
  const [on2, setOn2] = useState(true);
  const [on3, setOn3] = useState(false);
  const [on4, setOn4] = useState(false);
  const [loading, setLoading] = useState(false);
  return (
    <Container pa='1em'>
      <Example
        title='Default or Disabled'
        desc='Generate a switch element easily with beautiful animations and functionality'>
        <Row justifyContent='center'>
          <Col>
            <Switch on={on} onChange={() => setOn(v => !v)} />
          </Col>
          <Col>
            <Switch disabled on={on2} onChange={() => setOn2(v => !v)} />
          </Col>
          <Col>
            <Switch disabled on={on3} onChange={() => setOn3(v => !v)} />
          </Col>
        </Row>
      </Example>
      <Example
        title='Color'
        desc='Change the color of the component when it is in active state, the allowed values ​​are (main colors of vuesax,
        RGB, HEX)'>
        <Row>
          <Col>
            <Switch on={on2} onChange={() => setOn2(v => !v)} />
          </Col>
          <Col>
            <Switch trackColorOff={'#d6d3d1'} on={false} />
          </Col>
          <Col>
            <Switch trackColorOn={'#FF5463'} on={on2} onChange={() => setOn2(v => !v)} />
          </Col>
          <Col>
            <Switch trackColorOff={'#94a3b8'} on={false} />
          </Col>
          <Col>
            <Switch trackColorOn={'#56CE4B'} on={on2} onChange={() => setOn2(v => !v)} />
          </Col>
          <Col>
            <Switch trackColorOn={'#8742FF'} on={on2} onChange={() => setOn2(v => !v)} />
          </Col>
        </Row>
      </Example>
      <Example title='Text' desc='Add a text to the switch '>
        <Row>
          <Col>
            <Switch textOn='yes' on={on2} onChange={() => setOn2(v => !v)} />
          </Col>
          <Col>
            <Switch textOff='off' on={false} />
          </Col>
          <Col>
            <Switch
              textOn='JavaScript'
              textOff='Java'
              trackColorOn={'#FF5463'}
              on={on2}
              onChange={() => setOn2(v => !v)}
            />
          </Col>
          <Col>
            <Switch textOff='offline' on={false} />
          </Col>
        </Row>
      </Example>

      <Example
        title='Loading'
        desc='Add a loading animation to the component with the loading property, the property is aboolean so you can add it without any value.'>
        <Row>
          <Col>
            <Switch
              on={on4}
              onChange={() => {
                setLoading(v => !v);
                setOn4(v => !v);
              }}
            />
          </Col>
          <Col>
            <Switch loading={loading} on={false} />
          </Col>
        </Row>
      </Example>
    </Container>
  );
};

export default ButtonExamples;
