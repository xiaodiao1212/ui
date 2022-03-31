/** @jsxImportSource @emotion/react */

import * as React from 'react';
import { Base } from '../props';
import { css, useTheme } from '@emotion/react';
import { Theme } from '../../styles/themes';
type DatePickerProps = Base &
  Partial<{
    onChange: (date: any) => any;
    min: string;
    max: string;
  }>;

const DatePicker = ({
  onChange,
  min,
  max,
  children,
  co,

  ...props
}: React.ComponentPropsWithoutRef<'label'> & DatePickerProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };
  const theme = useTheme() as Theme;
  const styles = css({
    cursor: ' pointer',
    ...(co && (typeof co == 'function' ? co(theme) : co)),
  });

  return (
    <label css={styles} {...props}>
      <input min={min} max={max} hidden={!!children} type='date' onChange={handleChange} />
      {children || <span id='value'>n/a</span>}
    </label>
  );
};

export default DatePicker;
