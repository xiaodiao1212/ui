import { StrictMode, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { App, Button, Col, Container, Row, Text } from './build';



const container = document.getElementById('root');

if (container) {
  const root = createRoot(container);

  const Main = () => {
 
    return (
      <App
        theme={{
          color: {
            primary: '#011B69',
          },
        }}>
        <Container fullScreen>
          <Row>
           
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
