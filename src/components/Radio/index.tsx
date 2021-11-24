/** @jsxImportSource @emotion/react */
import { useContext, createContext, useState } from 'react';
import { Theme } from '../../constants/theme';
import { useTheme, css } from '@emotion/react';

type RadioValue = string | number;

type RadioProps = {
  co?: ((theme: Theme) => React.CSSProperties) | React.CSSProperties;
  disabled?: boolean;
  checked?: boolean;
  children?: React.ReactNode;
  value?: RadioValue;
  onChange?: (e: React.FormEvent<HTMLInputElement>) => any;
};

const Radio = ({
  disabled = false,
  checked = false,
  defaultChecked = false,
  onChange,
  children,
  value,
  co,
  ...props
}: RadioProps & React.ComponentPropsWithoutRef<'label'>) => {
  let [ischecked, setIschecked] = useState(checked);
  let content: any = children;
  const theme = useTheme() as Theme;
  const inputStyle = css({
    width: '18px',
    height: '18px',
    marginRight: '8px',
    position: 'relative',
    top: '4px',
    cursor: disabled ? 'not-allowed' : 'pointer',
  });
  const labelStyle = css({
    ...(typeof co == 'function' && co(theme)),
    padding: 9,
    cursor: disabled ? 'not-allowed' : 'pointer',
    color: disabled ? '#00000040' : '#000000',
  });
  console.log('ischecked:', ischecked);

  return (
    <label css={labelStyle} {...props}>
      <input
        css={inputStyle}
        type='radio'
        value={value ? value : content}
        onChange={e => {
          setIschecked(e.target.checked);
          onChange?.(e);
        }}
        onClick={e => {
          e.stopPropagation();
          e.nativeEvent.stopImmediatePropagation();
        }}
        checked={ischecked}
        disabled={disabled}
      />
      {children}
    </label>
  );
};

export default Radio;
