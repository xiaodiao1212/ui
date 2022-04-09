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
import ButtonExamples from './src/Button.examples';
import SwitchExamples from './src/Switch.examples';
import LinkExamples from './src/Link.examples';
import DividerExamples from './src/Divider.examples';
const container = document.getElementById('root');

type Components = 'link' | 'switch' | 'button' | 'image' | 'divider';
if (container) {
  const root = createRoot(container);

  const Main = () => {
    const [example, setExample] = useState<Components>('switch');
    const content = () => {
      switch (example) {
        case 'button':
          return <ButtonExamples />;
        case 'divider':
          return <DividerExamples />;
        case 'switch':
          return <SwitchExamples />;
        case 'link':
          return <LinkExamples />;
        case 'image':
          return <LinkExamples />;
        default:
          return undefined;
      }
    };

    return (
      <App>
        <Container fullHeight pa='1em' background='#F4F7F8'>
          {content()}
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
