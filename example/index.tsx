import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App, CheckBox, Radio } from '../dist';

const Main = () => {
  const [a, b] = React.useState('');
  const [value, setValue] = React.useState<string[]>([]);
  const handleClick = (e: any) => {
    console.log('e:', e.target.value);
  };
  const groupValue = (val: string[]) => {
    // console.log('val:', val);
    setValue(val);
  };
  return (
    <App>
      {/* <CheckBox.Group style={{ margin: '2em 2em' }} value={value} onChange={groupValue}>
        <CheckBox value='orange'>orange</CheckBox>
        <CheckBox value='apple'>apple</CheckBox>
        <CheckBox value='banana'>banana</CheckBox>
        <CheckBox value='cherry'>cherry</CheckBox>
      </CheckBox.Group> */}
      {/* <CheckBox onChange={handleClick}>orange</CheckBox> */}
      <Radio checked onChange={handleClick}>
        orange
      </Radio>
    </App>
  );
};

ReactDOM.render(<Main />, document.getElementById('root'));
