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
const container = document.getElementById('root');

type Components = 'appbar' | 'swiper' | 'introduction' | 'slider' | 'link' | 'switch' | 'button' | 'image' | 'divider';
if (container) {
  const root = createRoot(container);

  const Main = () => {
    const [example, setExample] = useState<Components>('appbar');
    const renderContent = () => {
      switch (example) {
        case 'button':
          return <ButtonExamples />;
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
      <App>
        <Container fullHeight pa='1em' background='#F4F7F8'>
          {renderContent()}
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
