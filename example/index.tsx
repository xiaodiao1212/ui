import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App, Swiper } from '../dist';

const Main = () => {
  const [a, b] = React.useState('');
  return (
    <App>
      <Swiper
        onClick={i => {
          console.log(i);
        }}
        items={[0, 1, 2, 3, 4, 5].map(v => ({ index: v, content: <div style={{ background: `${v}00` }}>{v}</div> }))}
      />
    </App>
  );
};

ReactDOM.render(<Main />, document.getElementById('root'));
