import { Key, StrictMode, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { App, Button, Col, Container, List, NavBar, Navigation, PullRefresh, Row, Tabs, Text } from './build';

const container = document.getElementById('root');

if (container) {
  const root = createRoot(container);

  const Main = () => {
    return (
      <App>
        <Container fullScreen>
          <NavBar css={{
            padding:'1em'
          }}>
            <NavBar.Brand>{'<-'}</NavBar.Brand>
            <NavBar.Content>home</NavBar.Content>
            <NavBar.Extra>op</NavBar.Extra>
          </NavBar>
          <Tabs
            onChange={k => {
              console.log(k);
            }}
            tab={''}>
            <Tabs.Item>
              <>1</>
            </Tabs.Item>
            <Tabs.Item>
              <PullRefresh>
                <List>
                  {['t1', 't2', 't3'].map((v, i) => (
                    <List.Item title={v} extra={<>{i}</>} />
                  ))}
                </List>
              </PullRefresh>
            </Tabs.Item>
            <Tabs.Item>
              <>3</>
            </Tabs.Item>
          </Tabs>
          <Navigation>
            {[1, 2, 3].map(v => (
              <Navigation.Item>{v}</Navigation.Item>
            ))}
          </Navigation>
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
