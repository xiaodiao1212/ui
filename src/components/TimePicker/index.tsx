/** @jsxImportSource @emotion/react */
import clsx from 'clsx';
import { css, useTheme } from '@emotion/react';
import { Theme } from '../../styles/themes';
import * as React from 'react';

type TimePickerProps = Partial<{
  min: string;
  max: string;
  onChange: (time: any) => any;
  co?: ((theme: Theme) => React.CSSProperties) | React.CSSProperties;
}>;

const TimePicker = ({
  min,
  max,
  onChange,
  children,
  co,
  className,
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
    <label css={styles} className={clsx(className)} {...props}>
      <input min={min} max={max} hidden={!!children} type='time' onChange={handleChange} />
      {children || 'Time'}
    </label>
  );
};

export default TimePicker;
