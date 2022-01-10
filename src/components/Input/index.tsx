/** @jsxImportSource @emotion/react */
import clsx from 'clsx';
import { css, useTheme } from '@emotion/react';
import { Theme } from '../../constants/theme';
import * as React from 'react';
import Col from '../Col';
import Row from '../Row';

type InputProps = {
  flex?: number;
  gap?: string;
  borderRadius?: string;
  format?: (value: string) => string;
  onChange?: (value: string, e: any) => any;
  prefix?: { node: React.ReactNode; flex: number };
  suffix?: { node: React.ReactNode; flex: number };
  outline?: boolean;
  contain?: boolean;
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
  borderRadius = '4px',
  gap,
  contain = false,
  outline = true,
  format,
  disabled,
  onChange,
  co,
  children,
  className,
  ...props
}: Omit<React.ComponentPropsWithoutRef<'input'>, 'suffix' | 'prefix'> & InputProps) => {
  const theme = useTheme() as Theme;
  const styles = css({
    width: '100%',
    padding: '0.6em 1.1em',
    backgroundColor: contain
      ? theme?.color?.greyLight || '#F3F4F6'
      : disabled
      ? theme?.color?.greyLight || '#F3F4F6'
      : 'transparent',
    color: disabled ? theme?.color?.grey || '#6b7280' : theme?.color?.black || '#111827',
    border: contain ? '' : outline ? (!disabled ? '1px solid ' + theme?.color?.greyLight : 'none') : 'none',
    borderRadius: borderRadius,
    ...(typeof co == 'function' ? co(theme) : co),
  });
  const styleRow = css({
    backgroundColor: contain
      ? theme?.color?.greyLight || '#F3F4F6'
      : disabled
      ? theme?.color?.greyLight || '#F3F4F6'
      : 'transparent',
    ...(typeof co == 'function' ? co(theme) : co),
  });
  const computedClassNames = clsx(className);
  const handleInputChange = (e: { target: { value: string } }) => {
    onChange?.(format?.(e.target.value) || e.target.value, e);
  };
  const inputNode = <input css={styles} {...props} onChange={handleInputChange} />;
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
