import { useState } from 'react';
import * as ReactDOM from 'react-dom';
import { App, Button, Card, Notification } from '../dist';

const Main = () => {
  const [visible, setShow] = useState(false);

  return (
    <App>
      <Button block onClick={() => setShow(!visible)}>
        toggle
      </Button>
      <Notification visible={visible} handleModalVisibleChange={() => setShow(!visible)}>
        1
      </Notification>
    </App>
  );
};

ReactDOM.render(<Main />, document.getElementById('root'));
