/** @jsxImportSource @emotion/react */

import * as React from 'react';
import { Base } from '../props';
import { useCSS, useTheme, useFunctionLikeValue } from '../../styles/css';
import { Theme } from '../../styles/themes';
type TimePickerProps = Base &
  Partial<{
    min: string;
    max: string;
    onChange: (time: any) => any;
  }>;

const TimePicker = ({
  min,
  max,
  onChange,
  children,
  css,
  ...props
}: React.ComponentPropsWithoutRef<'label'> & TimePickerProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  const theme = useTheme() as Theme;
  const styles = useCSS({
    ...useFunctionLikeValue(theme, css),
  });
  return (
    <label css={styles} {...props}>
      <input min={min} max={max} hidden={!!children} type='time' onChange={handleChange} />
      {children}
    </label>
  );
};

export default TimePicker;
