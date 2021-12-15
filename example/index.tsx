import { useState } from 'react';
import * as ReactDOM from 'react-dom';

import { App, Button, Collapse, Container, Notification } from '../dist';

const Main = () => {
  const [expand, setExpand] = useState(false);
  const handleChangeExpand = () => {
    setExpand(v => !v);
  };
  return (
    <App>
      <Container>
        <Collapse expand={expand} title={'333'} onChange={handleChangeExpand}>
          rrrrrrrrrrrrrrrrrrrrr rrrrrrrrrrrrrrrrrrrrr rrrrrrrrrrrrrrrrrrrrr rrrrrrrrrrrrrrrrrrrrr rrrrrrrrrrrrrrrrrrrrr
          rrrrrrrrrrrrrrrrrrrrr
        </Collapse>
      </Container>
    </App>
  );
};

ReactDOM.render(<Main />, document.getElementById('root'));
