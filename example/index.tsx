import { StrictMode, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  Drawer,
  Swiper,
  App,
  Center,
  Input,
  Button,
  Col,
  AppBar,
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
  Navigation,
  Overlay,
  Image,
} from './build';
import Introduction from './src/Introduction';
import SliderExamples from './src/Slider.examples';
import ButtonExamples from './src/Button.examples';
import SwitchExamples from './src/Switch.examples';
import LinkExamples from './src/Link.examples';
import DividerExamples from './src/Divider.examples';
import SwiperExamples from './src/Swiper.examples';
import AppBarExamples from './src/AppBar.examples';
import InputExamples from './src/Input.examples';
import { useCustomTheme } from './build/styles/themes';
const container = document.getElementById('root');
const components = [
  'input',
  'appbar',
  'swiper',
  'introduction',
  'slider',
  'link',
  'switch',
  'button',
  'image',
  'divider',
];
type Components =
  | 'input'
  | 'appbar'
  | 'swiper'
  | 'introduction'
  | 'slider'
  | 'link'
  | 'switch'
  | 'button'
  | 'image'
  | 'divider';
if (container) {
  const root = createRoot(container);

  const Main = () => {
    const [example, setExample] = useState<Components>('input');
    const renderContent = () => {
      switch (example) {
        case 'button':
          return <ButtonExamples />;
        case 'input':
          return <InputExamples />;
        case 'introduction':
          return <Introduction />;
        case 'divider':
          return <DividerExamples />;
        case 'switch':
          return <SwitchExamples />;
        case 'swiper':
          return <SwiperExamples />;
        case 'link':
          return <LinkExamples />;
        case 'image':
          return <LinkExamples />;
        case 'slider':
          return <SliderExamples />;
        case 'appbar':
          return <AppBarExamples />;
        default:
          return undefined;
      }
    };

    return (
      <App
        theme={{
          color: {
            primary: '#011B69',
          },
        }}>
        <Container fullScreen pa='1em'>
          <Row>
            <Col
              flex={1}
              co={{
                background: '#F4F7F8',
              }}>
              <Container fullScreen>
                {components.map(v => (
                  <Button block text co={{ margin: '1em 0' }} onClick={() => setExample(v as any)}>
                    <Text size='1.3rem' blod color={t => t.color.primary}>
                      {v}
                    </Text>
                  </Button>
                ))}
              </Container>
            </Col>
            <Col co={{ textAlign: 'left' }} flex={3}>
              {renderContent()}
            </Col>
          </Row>
        </Container>
      </App>
    );
  };

  root.render(
    <StrictMode>
      <Main />
    </StrictMode>,
  );
}
