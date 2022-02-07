/** @jsxImportSource @emotion/react */
import clsx from 'clsx';
import { css, useTheme } from '@emotion/react';
import { Theme } from '../../constants/theme';
import * as React from 'react';
import Col from '../Col';
import Row from '../Row';

type InputProps = {
  number?: boolean;
  password?: boolean;
  clearable?: boolean;
  flex?: number;
  gap?: string;
  borderRadius?: string;
  maxLength?: number;
  format?: (value: string) => string;
  onChange?: (value: string, e: any) => any;
  prefix?: { node: React.ReactNode; flex: number };
  suffix?: { node: React.ReactNode; flex: number };
  outline?: boolean;
  contain?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
  placeholder?: string;
  className?: string;
  co?: ((theme: Theme) => React.CSSProperties) | React.CSSProperties;
};

/**
 * Input:
 * if has prefix or suffix, the property flex is required.
 */
const Input = ({
  prefix,
  suffix,
  flex = 1,
  placeholder,
  borderRadius = '4px',
  gap,
  contain = false,
  maxLength,
  password = false,
  number = false,
  outline = true,
  format,
  disabled,
  onChange,
  co,
  children,
  className,
  ...props
}: InputProps) => {
  const theme = useTheme() as Theme;
  const styles = css({
    width: '100%',
    padding: '0.6em 1.1em',
    backgroundColor: contain
      ? theme?.color?.white || '#FEFEFE'
      : disabled
      ? theme?.color?.white || '#FEFEFE'
      : 'transparent',
    color: disabled ? theme?.color?.grey || '#6b7280' : theme?.color?.black || '#111827',
    border: contain ? '' : outline ? (!disabled ? '1px solid ' + theme?.color?.greyLight : 'none') : 'none',
    borderRadius: borderRadius,
    ...(typeof co == 'function' ? co(theme) : co),
  });
  const styleRow = css({
    backgroundColor: contain
      ? theme?.color?.white || '#FEFEFE'
      : disabled
      ? theme?.color?.white || '#FEFEFE'
      : 'transparent',
    ...(typeof co == 'function' ? co?.(theme) : co),
  });
  const computedClassNames = clsx(className);
  const handleInputChange = (e: { target: { value: string } }) => {
    let r = number
      ? e.target.value.length > 1
        ? e.target.value[0] == '0'
          ? e.target.value.substring(1)
          : e.target.value
        : e.target.value
      : format?.(e.target.value) || e.target.value;

    if (maxLength) r = r.slice(0, maxLength);
    onChange?.(r, e);
  };
  const inputNode = (
    <input type={number ? 'number' : 'text'} css={styles} placeholder={placeholder} onChange={handleInputChange} />
  );
  return prefix || suffix ? (
    <Row css={styleRow} className={computedClassNames} gap={gap}>
      {prefix && <Col flex={prefix.flex}>{prefix.node}</Col>}
      <Col flex={flex}>{inputNode}</Col>
      {suffix && <Col flex={suffix.flex}>{suffix.node}</Col>}
    </Row>
  ) : (
    inputNode
  );
};

export default Input;
