/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react';
import { Theme } from '../../styles/themes';
import * as React from 'react';
import { useState } from 'react';
type DatePickerProps = Partial<{
  onlyImg?: boolean;
  className: string;
  children: React.ReactNode;
  placeholder: string;
  formater: (date: string) => string;
  onChange: (date: string, e: React.ChangeEvent<HTMLInputElement>) => any;
  co: ((theme: Theme) => React.CSSProperties) | React.CSSProperties;
}>;

const DatePicker = ({
  onlyImg,
  accept,
  onChange,
  formater,
  children,
  placeholder,
  co,
  ...props
}: Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'placeholder'> & DatePickerProps) => {
  const [value, setValue] = useState('');
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(formater ? formater(e.target.value) : e.target.value);
    onChange?.(formater ? formater(e.target.value) : e.target.value, e);
  };
  const theme = useTheme() as Theme;
  const styles = css({
    cursor: ' pointer',
    ...(typeof co == 'function' ? co(theme) : co),
  });

  return (
    <label css={styles} aria-label='file DatePicker input'>
      <input type='datetime-local' hidden onChange={handleDateChange} {...props} />
      {value || placeholder}
    </label>
  );
};

export default DatePicker;
