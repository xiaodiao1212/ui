/** @jsxImportSource @emotion/react */

import { css, useTheme } from '@emotion/react';
import { Theme } from '../../styles/themes';
import { useState, ReactNode, CSSProperties, useMemo } from 'react';
import { useFunctionLikeValue } from '../../styles/css';
import vars from '../../styles/vars';

type InputProps = {
  number?: boolean;
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
  icon?: ReactNode;
  extra?: ReactNode;
  value?: any;
  outlined?: boolean;
  contain?: boolean;
  disabled?: boolean;
  placeholder?: ReactNode;
  className?: string;
  placeholderStyle?: ((theme: Theme) => CSSProperties) | CSSProperties;
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
  outlined = false,
  format,
  verify,
  disabled,
  onChange,
  inputStyle,
  messageStyle,
  containerStyle,
  placeholderStyle,
  contentStyle,
  labelStyle,
  iconStyle,
  extraStyle,
  ...props
}: InputProps) => {
  const theme = useTheme() as Theme;

  const [showMessage, setShowMessage] = useState(false);
  const [focus, setFocus] = useState(false);
  const [innerValue, setInnerValue] = useState('');
  const padding = useMemo(() => (theme ? theme.input.padding : vars.input.padding), []);
  const inputStyles = css({
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    padding,
    '& > input': {},
    ...useFunctionLikeValue(theme, inputStyle),
  });

  const containerStyles = css({
    display: 'inline-flex',
    flexDirection: 'column',
    alignItems: 'start',
    ...useFunctionLikeValue(theme, containerStyle),
  });

  const contentStyles = css({
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    backgroundColor: contain
      ? theme
        ? theme.color.grey
        : vars.color.grey
      : disabled
      ? theme
        ? theme.color.grey
        : vars.color.grey
      : 'transparent',
    border: outlined ? `1px solid ${theme ? theme.color.black : vars.color.black}` : '',
    ...useFunctionLikeValue(theme, contentStyle),
  });
  const labelStyles = css({
    ...useFunctionLikeValue(theme, labelStyle),
  });
  const iconStyles = css({
    padding,
    ...useFunctionLikeValue(theme, iconStyle),
  });
  const placeholderStyles = css({
    position: 'absolute',
    left: 0,
    padding,
    transition: 'all .25s ease-out',
    userSelect: 'none',
    cursor: 'text',
    pointerEvents: 'none',
    opacity: focus ? 0 : 0.4,
    ...useFunctionLikeValue(theme, placeholderStyle),
  });
  const extraStyles = css({
    padding,
    ...useFunctionLikeValue(theme, extraStyle),
  });
  const loadingStyles = css({
    padding,
    ...useFunctionLikeValue(theme, extraStyle),
  });
  const messageStyles = css({
    color: showMessage ? (theme ? theme.color.red : vars.color.red) : '',
    ...useFunctionLikeValue(theme, messageStyle),
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

    let r = number
      ? value.length > 1
        ? value[0] == '0'
          ? value.substring(1)
          : value
        : value
      : format?.(value, e) || value;

    if (maxLength) r = r.slice(0, maxLength);
    setInnerValue(r);
    onChange?.(r, e);
  };

  return (
    <div css={containerStyles}>
      {label && <div css={labelStyles}>{label}</div>}
      <div css={contentStyles}>
        {icon && <div css={iconStyles}>{icon}</div>}
        <div css={inputStyles}>
          <input
            onBlur={() => {
              innerValue.length == 0 && setFocus(false);
            }}
            onFocus={() => setFocus(true)}
            value={value}
            type={number ? 'number' : 'text'}
            onChange={handleInputChange}
          />
          {placeholder && <div css={placeholderStyles}>{placeholder}</div>}
        </div>
        {loading && <div css={loadingStyles}></div>}

        {!loading && extra && <div css={extraStyles}>{extra}</div>}
      </div>

      {showMessage && <div css={messageStyles}>{message}</div>}
    </div>
  );
};

export default Input;
