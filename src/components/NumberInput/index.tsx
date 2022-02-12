/** @jsxImportSource @emotion/react */
import clsx from 'clsx';
import { css, useTheme, keyframes } from '@emotion/react';
import { Theme } from '../../constants/theme';

type NumberInputProps = Partial<{
  onChange: (value: string) => void;
  children: React.ReactNode;
  className: string;
  co: ((theme: Theme) => React.CSSProperties) | React.CSSProperties;
}>;

const NumberInput = ({ onChange, children, co, className, ...props }: NumberInputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(
      e.target.value.length > 1
        ? e.target.value[0] == '0'
          ? e.target.value.substring(1)
          : e.target.value
        : e.target.value,
    );
  };
  const theme = useTheme() as Theme;
  const styles = css({
    ...(co && (typeof co == 'function' ? co(theme) : co)),
  });
  const computedClassNames = clsx(className);
  return (
    <label className={computedClassNames} {...props}>
      <input css={styles} hidden={!!children} type='number' onChange={handleChange} />
      {children}
    </label>
  );
};

export default NumberInput;
