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
  const [item, setItem] = useState([1, 4, 4, 5]);
  const [currentIndex, setCurrentIndex] = useState(2);
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
            <Text>first-of-child ui</Text>
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
              disabled
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
                  Toast.show({
                    title: '1313',
                  });
                }}>
                click to Toasts
              </Button>
            </Badge>
          </Col>{' '}
          <Col>
            <Chip>chip</Chip>
          </Col>{' '}
        </Row>
      </Container>
      <Container pa='1em'>
        <Row>
          <Col>
            <Chip outline color={' #F067B4'}>
              chip
            </Chip>
          </Col>
          <Col>
            <Chip color={'linear-gradient(to right, #da4453, #89216b)'}>chip</Chip>
          </Col>
          <Col>
            <Chip r={99}>chip</Chip>
          </Col>
        </Row>
      </Container>
      <Container pa='1em'>
        <Row gap='1em'>
          <Col>
            <Card title='t1' extra='133' color={t => t.color.grey} co={{ borderRadius: '4px' }}>
              c1
            </Card>
          </Col>{' '}
          <Col>
            <Card title='t2' extra='133' color={'red'} co={{ borderRadius: '4px' }}>
              c2
            </Card>
          </Col>{' '}
        </Row>
      </Container>
      {/* <Swiper>
        {[0, 1, 2, 3].map(v => (
          <Swiper.item />
        ))}
      </Swiper> */}
      <Container py='.2em'>
        <Divider color='red' size={3} />
      </Container>
      <Container pb='1em'>
        <Divider color='green' size={2} />{' '}
      </Container>
      <Container pb='1em'>
        <Divider color='red' size={3} dashed />{' '}
      </Container>
      <Container pa='1em'>
        <Row gap='1em'>
          <Col>
            <Upload
              onFileChange={file => {
                console.log(file);
              }}>
              <Card co={{ border: '1px solid #3B2667', borderRadius: '4px' }}>Upload</Card>
            </Upload>
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
          {item.map((v, i) => (
            <Segment.Item key={i}>{v}</Segment.Item>
          ))}
        </Segment>
      </Container>

      <Container pa='1em'>
        <List
          gap='1em'
          data={[
            { id: '1', title: '3', extra: <Button color='red'>3333</Button> },
            { id: '2', title: '2' },
          ]}
        />
      </Container>
      <BottomNavigation
        currentIndex={currentIndex}
        onTap={i => {
          setCurrentIndex(i);
        }}>
        {item.map((v, i) => (
          <BottomNavigation.item key={i} label={v + ''} icon={'1212'} />
        ))}
      </BottomNavigation>
      <Drawer open={drawerOpen} position='bottom' onClose={() => setDrawerOpen(v => !v)} co={t => ({})}>
        <Card>Main Content</Card>
      </Drawer>

      {overlayOpen && <Overlay visible={overlayOpen}></Overlay>}
    </App>
  );
};

ReactDOM.render(<Main />, document.getElementById('root'));
