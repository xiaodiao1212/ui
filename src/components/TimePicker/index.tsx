/** @jsxImportSource @emotion/react */

import { css, useTheme } from '@emotion/react';
import { Theme } from '../../styles/themes';
import * as React from 'react';
import { Base } from '../props';
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
  co,
  ...props
}: React.ComponentPropsWithoutRef<'label'> & TimePickerProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  const theme = useTheme() as Theme;
  const styles = css({
    ...(co && (typeof co == 'function' ? co(theme) : co)),
  });
  return (
    <label css={styles} {...props}>
      <input min={min} max={max} hidden={!!children} type='time' onChange={handleChange} />
      {children || 'Time'}
    </label>
  );
};

export default TimePicker;
