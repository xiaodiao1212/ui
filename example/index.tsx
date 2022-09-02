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
import NavBarExamples from './src/NavBar.examples';
import InputExamples from './src/Input.examples';
import CellExamples from './src/Cell.examples';
import TextExamples from './src/Text.examples';
import ContainerExamples from './src/Container.examples';
import TabsExamples from './src/Tabs.examples';

const container = document.getElementById('root');
const components = [
  '介绍',
  '快速入门',
  'input',
  'navbar',
  'text',
  'swiper',
  'container',
  'slider',
  'link',
  'switch',
  'tabs',
  'button',
  'image',
  'divider',
  'cell',
  'card',
];
type Components =
  | 'input'
  | 'navbar'
  | 'text'
  | 'swiper'
  | 'card'
  | '介绍'
  | '快速入门'
  | 'slider'
  | 'container'
  | 'tabs'
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
        case 'tabs':
          return <TabsExamples />;

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
        case 'text':
          return <TextExamples />;
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
        case 'navbar':
          return <NavBarExamples />;
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
                    <Text size={1.2} blod color={t => t.color.primary}>
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
