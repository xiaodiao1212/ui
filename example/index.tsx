import { Key, StrictMode, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  App,
  Button,
  Tag,
  Container,
  List,
  Swiper,
  NavBar,
  BottomNavigation,
  PullRefresh,
  Row,
  Tabs,
  Text,
  InfiniteScroll,
  Breadcrumbs,
} from './build';

const container = document.getElementById('root');

if (container) {
  const root = createRoot(container);

  const Main = () => {
    const [tab, setTab] = useState('1');
    const [activeItem, setActiveItem] = useState('1');
    return (
      <App>
        <Container fullScreen>
          <NavBar
            css={{
              padding: '1em',
            }}>
            <NavBar.Brand>{'<-'}</NavBar.Brand>
            <NavBar.Content>home</NavBar.Content>
            <NavBar.Extra>op</NavBar.Extra>
          </NavBar>
          <Tabs
          
            onTabsChange={t => {
              setTab(t);
            }}
            activeTab={tab}>
            <Tabs.Item label='1' />
            <Tabs.Item label='2' />
            <Tabs.Item label='3' />
            <Tabs.Indicator />
          </Tabs>
          <Container pa='1em'>
            <Breadcrumbs>
              <Breadcrumbs.Item>11</Breadcrumbs.Item>
              <Breadcrumbs.Item>11</Breadcrumbs.Item>
              <Breadcrumbs.Item>11</Breadcrumbs.Item>
            </Breadcrumbs>
          </Container>
          <Container h='40vh'>
            <Swiper></Swiper>
          </Container>
          <Container fixed bottom='0'>
            <BottomNavigation
              onItemChange={i => {
                setActiveItem(i);
              }}
              activeItem={activeItem}>
              {[1, 2, 3].map(v => (
                <BottomNavigation.Item label={v + ''} />
              ))}
            </BottomNavigation>
          </Container>
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
