import * as ReactDOM from 'react-dom';
import { App, CheckBox, Alert } from '../dist';

const Main = () => {
  const [value, setValue] = useState<string[]>([]);
  const groupValue = (val: any) => {
    setValue(val);
  };
  return (
    <App>
      <Alert scroll icon={'124'}>
        yidhaldkakfhahfyidhaldkakfhahfyidhaldkakfhahfyidhaldkakfhahf
      </Alert>
    </App>
  );
};

ReactDOM.render(<Main />, document.getElementById('root'));
