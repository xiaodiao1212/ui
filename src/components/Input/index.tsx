/** @jsxImportSource @emotion/react */
import clsx from 'clsx';
import { css, useTheme } from '@emotion/react';
import { Theme } from '../../constants/theme';
import { useState, ReactNode, CSSProperties } from 'react';

type InputProps = {
  number?: boolean;
  clearable?: boolean;
  flex?: number;
  gap?: string;
  label?: string;
  message?: string;
  closable?: boolean;
  loading?: boolean;
  borderRadius?: string;
  maxLength?: number;
  verify?: (value: string, e: React.ChangeEvent<HTMLInputElement>) => boolean;
  format?: (value: string, e: React.ChangeEvent<HTMLInputElement>) => string;
  onChange?: (value: string, e: React.ChangeEvent<HTMLInputElement>) => any;
  icon?: ReactNode;
  extra?: ReactNode;
  value?: any;
  outline?: boolean;
  contain?: boolean;
  disabled?: boolean;
  placeholder?: string;
  className?: string;
  containerStyle?: ((theme: Theme) => CSSProperties) | CSSProperties;
  contentStyle?: ((theme: Theme) => CSSProperties) | CSSProperties;
  messageStyle?: ((theme: Theme) => CSSProperties) | CSSProperties;
  labelStyle?: ((theme: Theme) => CSSProperties) | CSSProperties;
  inputStyle?: ((theme: Theme) => CSSProperties) | CSSProperties;
  iconStyle?: ((theme: Theme) => CSSProperties) | CSSProperties;
  extraStyle?: ((theme: Theme) => CSSProperties) | CSSProperties;
};

/**
 * Input:
 * if has prefix or suffix, the property flex is required.
 */
const Input = ({
  icon,
  extra,
  label,
  message,
  closable,
  loading,
  value,
  placeholder,
  contain = true,
  maxLength,
  number = false,
  outline = false,
  format,
  verify,
  disabled,
  onChange,
  inputStyle,
  className,
  messageStyle,
  containerStyle,
  contentStyle,
  labelStyle,
  iconStyle,
  extraStyle,
}: InputProps) => {
  const theme = useTheme() as Theme;
  const [showMessage, setShowMessage] = useState(false);
  const inputStyles = css({
    width: '100%',
    color: disabled ? theme?.color?.grey || '#6b7280' : theme?.color?.black || '#111827',
    ...(typeof inputStyle == 'function' ? inputStyle(theme) : inputStyle),
  });
  const containerStyles = css({
    textAlign: 'left',
    ...(typeof containerStyle == 'function' ? containerStyle?.(theme) : containerStyle),
  });

  const contentStyles = css({
    display: 'flex',
    alignItems: 'center',
    backgroundColor: contain
      ? theme?.color?.white || '#FEFEFE'
      : disabled
      ? theme?.color?.white || '#FEFEFE'
      : 'transparent',
    border: outline ? `1px solid ${theme?.color?.black || '#FEFEFE'}` : '',
    ...(typeof contentStyle == 'function' ? contentStyle?.(theme) : contentStyle),
  });
  const labelStyles = css({
    ...(typeof labelStyle == 'function' ? labelStyle?.(theme) : labelStyle),
  });
  const iconStyles = css({
    position: 'relative',
    left: 0,
    top: '50%',
    ...(typeof iconStyle == 'function' ? iconStyle?.(theme) : iconStyle),
  });
  const extraStyles = css({
    ...(typeof extraStyle == 'function' ? extraStyle?.(theme) : extraStyle),
  });
  const messageStyles = css({
    color: showMessage ? theme.color.red || 'red' : '',
    ...(typeof messageStyle == 'function' ? messageStyle?.(theme) : messageStyle),
  });
  const computedClassNames = clsx(className);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;
    if (verify && !verify(value, e)) {
      setShowMessage(true);
    } else {
      setShowMessage(false);
    }

    let r = number
      ? value.length > 1
        ? value[0] == '0'
          ? value.substring(1)
          : value
        : value
      : format?.(value, e) || value;

    if (maxLength) r = r.slice(0, maxLength);
    onChange?.(r, e);
  };

  return (
    <div css={containerStyles} className={computedClassNames}>
      {label && <div css={labelStyles}>{label}</div>}
      <div css={contentStyles}>
        {icon && <div css={iconStyles}>{icon}</div>}
        <input
          value={value}
          type={number ? 'number' : 'text'}
          css={inputStyles}
          placeholder={placeholder}
          onChange={handleInputChange}
        />
        {extra && <div css={extraStyles}>{extra}</div>}
      </div>
      {showMessage && <div css={messageStyles}>{message}</div>}
    </div>
  );
};

export default Input;
