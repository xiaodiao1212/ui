import { Key, StrictMode, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  App,
  Button,
  Tag,
  Container,
  List,
  NavBar,
  BottomNavigation,
  PullRefresh,
  Row,
  Tabs,
  Text,
  InfiniteScroll,
} from './build';

const container = document.getElementById('root');

if (container) {
  const root = createRoot(container);

  const Main = () => {
    const [tab, setTab] = useState('1');

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
          <Container css={{ height: '40vh' }}>
            <PullRefresh>
              <InfiniteScroll>
                <List>
                  {['t1', 't2', 't3', 't4', 't5', 't6', 't7', 't1', 't2', 't3', 't4', 't5', 't6', 't7'].map((v, i) => (
                    <List.Item title={v} extra={<Tag>{i}</Tag>} css={{ margin: '1em' }} />
                  ))}
                </List>
              </InfiniteScroll>
            </PullRefresh>
          </Container>
          <Container fixed bottom='0'>
            <BottomNavigation>
              {[1, 2, 3].map(v => (
                <BottomNavigation.Item>{v}</BottomNavigation.Item>
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
