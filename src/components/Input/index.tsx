/** @jsxImportSource @emotion/react */

import { Theme } from '../../styles/themes';
import { useState, ReactNode, CSSProperties, useMemo, useEffect } from 'react';
import { useThemedCSS, useThemedValue, useCSS, useTheme } from '../../styles/css';
import vars from '../../styles/vars';
import { ComponentBaseProps } from '../props';

type InputProps = Pick<ComponentBaseProps, 'css'> & {
  readOnly?: boolean;
  type?: 'number' | 'text' | 'password' | 'tel' | 'email' | 'url';
  clearable?: boolean;
  flex?: number;
  gap?: string;
  label?: ReactNode;
  message?: ReactNode;
  closable?: boolean;
  loading?: boolean;
  borderRadius?: string;
  maxLength?: number;
  verify?: (value: string, e: React.ChangeEvent<HTMLInputElement>) => boolean;
  format?: (value: string, e: React.ChangeEvent<HTMLInputElement>) => string;
  onChange?: (value: string, e: React.ChangeEvent<HTMLInputElement>) => any;
  prefix?: ReactNode;
  suffix?: ReactNode;
  value?: any;
  outlined?: boolean;
  contain?: boolean;
  disabled?: boolean;
  zeroStart?: boolean;
  placeholder?: ReactNode;
  className?: string;
  placeholderStyle?: ((theme: Theme) => CSSProperties) | CSSProperties;
  containerStyle?: ((theme: Theme) => CSSProperties) | CSSProperties;
  contentStyle?: ((theme: Theme) => CSSProperties) | CSSProperties;
  messageStyle?: ((theme: Theme) => CSSProperties) | CSSProperties;
  labelStyle?: ((theme: Theme) => CSSProperties) | CSSProperties;
  inputStyle?: ((theme: Theme) => CSSProperties) | CSSProperties;
  prefixStyle?: ((theme: Theme) => CSSProperties) | CSSProperties;
  suffixStyle?: ((theme: Theme) => CSSProperties) | CSSProperties;
};

/**
 * inputs fields are used to get the user input in a text field.
 * @param ...
 */
const Input = ({
  type,
  prefix,
  suffix,
  label,
  message,
  closable,
  loading,
  value,
  placeholder,
  contain,
  maxLength,
  outlined = false,
  zeroStart = false,
  format,
  verify,
  disabled,
  readOnly,
  onChange,
  inputStyle,
  messageStyle,
  containerStyle,
  placeholderStyle,
  contentStyle,
  labelStyle,
  prefixStyle,
  suffixStyle,
}: InputProps) => {
  const theme = useTheme();
  const [showClose, setShowClose] = useState(closable);
  const [showMessage, setShowMessage] = useState(false);
  const [focus, setFocus] = useState(false);
  const [innerValue, setInnerValue] = useState('');
  const padding = useMemo(() => (theme ? theme.input.padding : vars.input.padding), []);
  const inputStyles = useCSS({
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    padding,
    ...useThemedValue(theme, inputStyle),
  });

  const containerStyles = useCSS({
    display: 'inline-flex',
    flexDirection: 'column',
    alignItems: 'start',
    ...useThemedValue(theme, containerStyle),
  });

  const contentStyles = useCSS({
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    backgroundColor: contain ? (theme ? theme.color.greyLight : vars.color.greyLight) : 'transparent',
    border: outlined ? `1px solid ${theme ? theme.color.black : vars.color.black}` : '',
    ...useThemedValue(theme, contentStyle),
  });
  const labelStyles = useCSS({
    ...useThemedValue(theme, labelStyle),
  });
  const prefixStyles = useCSS({
    padding,
    ...useThemedValue(theme, prefixStyle),
  });
  const placeholderStyles = useCSS({
    position: 'absolute',
    left: 0,
    padding,
    transition: 'all .25s ease-out',
    userSelect: 'none',
    cursor: 'text',
    pointerEvents: 'none',
    opacity: focus ? 0 : 0.4,
    ...useThemedValue(theme, placeholderStyle),
  });
  const suffixStyles = useCSS({
    padding,
    ...useThemedValue(theme, suffixStyle),
  });
  const messageStyles = useCSS({
    color: showMessage ? (theme ? theme.color.red : vars.color.red) : '',
    ...useThemedValue(theme, messageStyle),
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;

    if (verify && !verify(value, e)) {
      setShowMessage(true);
    } else {
      setShowMessage(false);
    }

    let r =
      type == 'number'
        ? value.length > 1
          ? zeroStart
            ? value
            : value[0] == '0'
            ? value.substring(1)
            : value
          : value
        : format?.(value, e) || value;

    if (maxLength) r = r.slice(0, maxLength);
    setInnerValue(r);
    onChange?.(r, e);
  };

  useEffect(() => {
    if (innerValue == '' && !!showClose) {
      setShowClose(false);
    } else if (closable) {
      setShowClose(true);
    }
  }, [innerValue]);

  return (
    <div css={containerStyles}>
      {label && <div css={labelStyles}>{label}</div>}
      <div css={contentStyles}>
        {prefix && <div css={prefixStyles}>{prefix}</div>}
        <div css={inputStyles}>
          <input
            onBlur={() => {
              innerValue.length == 0 && setFocus(false);
            }}
            onFocus={() => setFocus(true)}
            value={value || innerValue}
            type={type}
            onChange={handleInputChange}
            disabled={disabled}
            readOnly={readOnly}
          />
          {placeholder && <div css={placeholderStyles}>{placeholder}</div>}
        </div>

        {(suffix || showClose) && (
          <div
            css={suffixStyles}
            onClick={() => {
              showClose && handleInputChange({ target: { value: '' } } as React.ChangeEvent<HTMLInputElement>);
            }}>
            {showClose ? 'x' : suffix}
          </div>
        )}
      </div>
      {showMessage && <div css={messageStyles}>{message}</div>}
    </div>
  );
};

export default Input;
