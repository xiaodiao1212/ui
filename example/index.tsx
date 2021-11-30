import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App, PullToRefresh, Radio } from '../dist';
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
  return (
    <App>
      <Radio>1</Radio>
      <Radio>2</Radio>
    </App>
  );
};

ReactDOM.render(<Main />, document.getElementById('root'));
