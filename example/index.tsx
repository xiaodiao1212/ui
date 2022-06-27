import { StrictMode, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { App, Button, Col, Container, Row, Text } from './build';
import Introduction from './src/Introduction';
import SliderExamples from './src/Slider.examples';
import ButtonExamples from './src/Button.examples';
import SwitchExamples from './src/Switch.examples';
import ImageExamples from './src/Image.examples';
import CardExamples from './src/Card.examples';
import LinkExamples from './src/Link.examples';
import DividerExamples from './src/Divider.examples';
import SwiperExamples from './src/Swiper.examples';
import AppBarExamples from './src/AppBar.examples';
import InputExamples from './src/Input.examples';
import CellExamples from './src/Cell.examples';
import ContainerExamples from './src/Container.examples';
const container = document.getElementById('root');
const components = [
  '介绍',
  '快速入门',
  'input',
  'appbar',
  'swiper',
  'container',
  'slider',
  'link',
  'switch',
  'button',
  'image',
  'divider',
  'cell',
  'card',
];
type Components =
  | 'input'
  | 'appbar'
  | 'swiper'
  | 'card'
  | '介绍'
  | '快速入门'
  | 'slider'
  | 'container'
  | 'cell'
  | 'link'
  | 'switch'
  | 'button'
  | 'image'
  | 'divider';
if (container) {
  const root = createRoot(container);

  const Main = () => {
    const [example, setExample] = useState<Components>('switch');
    const renderContent = () => {
      switch (example) {
        case 'button':
          return <ButtonExamples />;
        case 'container':
          return <ContainerExamples />;
        case 'input':
          return <InputExamples />;
        case '介绍':
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
          return <ImageExamples />;
        case 'card':
          return <CardExamples />;
        case 'cell':
          return <CellExamples />;
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
        <Container fullScreen>
          <Row>
            <Col
              flex={1}
              css={{
                background: '#F4F7F8',
                height: '100%',
                overflow: 'auto',
              }}>
              <Container fullScreen>
                {components.map(v => (
                  <Button block text css={{ margin: '1em 0' }} onClick={() => setExample(v as any)}>
                    <Text size='1.2rem' blod color={t => t.color.primary}>
                      {v}
                    </Text>
                  </Button>
                ))}
              </Container>
            </Col>
            <Col css={{ height: '100%', textAlign: 'left', overflow: 'auto' }} flex={5}>
              <Container fullScreen>{renderContent()} </Container>
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
