import { useState } from 'react';
import * as ReactDOM from 'react-dom';
import { App, CheckBox, PullToRefresh, Radio } from '../dist';
const oldData = [
  {
    id: 'sdwaa',
    productLogo: 'asaaaas',
    productName: 'Unprestamo',
    externalApplyNum: 2133,
    loanLimit: 221,
    dayRate: 42,
    applyH5Url: 'sasksksksk',
    loadTerm: 65,
  },
  {
    id: 'fsadsa',
    productLogo: 'asaaaas',
    productName: 'Unprestamo',
    externalApplyNum: 2133,
    loanLimit: 221,
    applyH5Url: 'sasksksksk',
    dayRate: 42,
    loadTerm: 65,
  },
  {
    id: 'fsadsa',
    productLogo: 'asaaaas',
    productName: 'Unprestamo',
    externalApplyNum: 2133,
    loanLimit: 221,
    applyH5Url: 'sasksksksk',
    dayRate: 42,
    loadTerm: 65,
  },
  {
    id: 'fsadsa',
    productLogo: 'asaaaas',
    productName: 'Unprestamo',
    externalApplyNum: 2133,
    loanLimit: 221,
    applyH5Url: 'sasksksksk',
    dayRate: 42,
    loadTerm: 65,
  },
  {
    id: 'fsadsa',
    productLogo: 'asaaaas',
    productName: 'Unprestamo',
    externalApplyNum: 2133,
    loanLimit: 221,
    applyH5Url: 'sasksksksk',
    dayRate: 42,
    loadTerm: 65,
  },
];
const Main = () => {
  const [value, setValue] = useState<string[]>([]);
  const groupValue = (val: any) => {
    setValue(val);
  };
  return (
    <App>
      <CheckBox.Group value={value} onChange={groupValue}>
        <CheckBox value='apple'>apple</CheckBox>
        <CheckBox value='apple'>orange</CheckBox>
      </CheckBox.Group>
    </App>
  );
};

ReactDOM.render(<Main />, document.getElementById('root'));
