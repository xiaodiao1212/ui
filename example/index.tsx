import * as ReactDOM from 'react-dom';
import { App, CheckBox, Alert } from '../dist';

const Main = () => {
  return (
    <App>
      <Alert scroll icon={'124'}>
        yidhaldkakfhahfyidhaldkakfhahfyidhaldkakfhahfyidhaldkakfhahf
      </Alert>
    </App>
  );
};

ReactDOM.render(<Main />, document.getElementById('root'));
