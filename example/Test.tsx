import { useState } from 'react';
import { Slider } from './build';
export const Test = () => {
  const [v, setV] = useState('0.3');

  return <Slider value={v} onChange={v => setV(v)} />;
};
