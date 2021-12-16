import { useState } from 'react';
import * as ReactDOM from 'react-dom';

import { App, StickyFooter, Collapse, Container, TabBar } from '../dist';

const Main = () => {
  const [expand, setExpand] = useState(false);
  const handleChangeExpand = () => {
    setExpand(v => !v);
  };
  return (
    <App>
      <Container fullScreen noPadding>
        <Collapse expand={expand} title={'333'} onChange={handleChangeExpand}>
          rrrrrrrrrrrrrrrrrrrrr rrrrrrrrrrrrrrrrrrrrr rrrrrrrrrrrrrrrrrrrrr rrrrrrrrrrrrrrrrrrrrr rrrrrrrrrrrrrrrrrrrrr
          rrrrrrrrrrrrrrrrrrrrr
        </Collapse>
        <StickyFooter>
          <TabBar items={[{ text: '1' }, { text: '2' }, { text: '3' }]} />
        </StickyFooter>
      </Container>
    </App>
  );
};

ReactDOM.render(<Main />, document.getElementById('root'));
