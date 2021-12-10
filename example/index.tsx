import { useState } from 'react';
import * as ReactDOM from 'react-dom';
import { App, Button, Card, Modal } from '../dist';

const Main = () => {
  const [visible, setShow] = useState(false);

  return (
    <App>
      <Button onClick={() => setShow(!visible)}>toggle</Button>
      {visible && (
        <Modal
          visible={visible}
          handleModalVisibleChange={() => {
            setShow(!visible);
          }}>
          <Card
            title={'1'}
            extra={'3'}
            co={{
              padding: '.5em',
              boxShadow: '1px 1px 10px 1px #999',
              borderRadius: '4px',
              width: '4em',
            }}>
            2
          </Card>
        </Modal>
      )}
    </App>
  );
};

ReactDOM.render(<Main />, document.getElementById('root'));
