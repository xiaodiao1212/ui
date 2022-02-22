import { useRef, useState } from 'react';
import * as ReactDOM from 'react-dom';
import {
  Drawer,
  Swiper,
  App,
  Center,
  Button,
  Col,
  Container,
  Row,
  Switch,
  List,
  Text,
  Segment,
  Chip,
  Badge,
  Card,
  Divider,
  Upload,
  Textarea,
  Toast,
  Slider,
  BottomNavigation,
  Overlay,
} from './build';
const Main = () => {
  const ref = useRef();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [overlayOpen, setOverlayOpen] = useState(false);
  const [v, setV] = useState('0.3');
  const [on, setOn] = useState(false);
  const [item, setItem] = useState([1, 2, 3, 4]);
  const [ci, setCi] = useState(2);
  return (
    <App>
      <Container pa='1em'>
        <Row>
          <Col>
            <Slider value={v} onChange={v => setV(v)} />
          </Col>
        </Row>
      </Container>
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
            <Button
              outlined
              onClick={() => {
                setOverlayOpen(v => !v);
              }}>
              overlay
            </Button>
          </Col>
          <Col>
            <Button
              rounded
              onClick={() => {
                setDrawerOpen(v => !v);
              }}>
              drawer
            </Button>
          </Col>
        </Row>
      </Container>
      <Container pa='1em'>
        <Row>
          <Col>
            <Badge>
              <Button
                onClick={() => {
                  // Toast.show('1');
                }}>
                this is Toasts
              </Button>
            </Badge>
          </Col>{' '}
          <Col>
            <Chip>this is chip</Chip>
          </Col>{' '}
        </Row>
      </Container>

      <Container pa='1em'>
        {/* <Swiper ref={ref}>[0, 1, 2, 3]</Swiper> */}
        <Row gap='1em'>
          <Col>
            <Card title='this is card1' extra='133' color={t => t.color.grey} co={{ borderRadius: '4px' }}>
              this is content1
            </Card>
          </Col>{' '}
          <Col>
            <Card title='this is card2' extra='133' color={'red'} co={{ borderRadius: '4px' }}>
              this is content2
            </Card>
          </Col>{' '}
        </Row>
      </Container>
      <Divider width={6} />
      <Container pa='1em'>
        <Row gap='1em'>
          <Col>
            <Upload
              onFileChange={file => {
                console.log(file);
              }}
            />
          </Col>{' '}
          <Col>
            <Textarea
              showCount
              onChange={(v, e) => {
                console.log(v);
                console.log(e);
              }}
            />
          </Col>{' '}
        </Row>
      </Container>
      <Container pa='1em'>
        <Segment>
          {item.map(v => (
            <Segment.Item>{v}</Segment.Item>
          ))}
        </Segment>
      </Container>
      <Container pa='1em'>
        <List>
          <List.Item />
        </List>
      </Container>
      <BottomNavigation
        currentIndex={ci}
        onTap={i => {
          setCi(i as number);
        }}>
        {item.map(v => (
          <BottomNavigation.item label={v + ''} icon={'1212'} />
        ))}
      </BottomNavigation>
      {drawerOpen && (
        <Drawer open={drawerOpen} onClose={() => setDrawerOpen(v => !v)}>
          <Card>1</Card>
        </Drawer>
      )}
      {overlayOpen && <Overlay visible={overlayOpen}></Overlay>}
    </App>
  );
};

ReactDOM.render(<Main />, document.getElementById('root'));
