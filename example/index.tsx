import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from '../dist';

const Main = () => {
  const [a, b] = React.useState('');
  return <App></App>;
};

ReactDOM.render(<Main />, document.getElementById('root'));
