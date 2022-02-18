/** @jsxImportSource @emotion/react */
import clsx from 'clsx';
import { css, useTheme } from '@emotion/react';
import { Theme } from '../../constants/theme';
import * as React from 'react';

type DatePickerProps = Partial<{
  onChange: (date: any) => any;
  min: string;
  max: string;
  co: ((theme: Theme) => React.CSSProperties) | React.CSSProperties;
}>;

const DatePicker = ({
  onChange,
  min,
  max,
  children,
  co,
  className,
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
  const computedClassNames = clsx(className);

  return (
    <label css={styles} className={computedClassNames} {...props}>
      <input min={min} max={max} hidden={!!children} type='date' onChange={handleChange} />
      {children || <span id='value'>n/a</span>}
    </label>
  );
};

export default DatePicker;
