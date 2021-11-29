/** @jsxImportSource @emotion/react */
import { useContext, useState } from 'react';
import { Theme } from '../../constants/theme';
import { useTheme, css } from '@emotion/react';
import CheckBoxGroup from './CheckBoxGroup';
import { CheckboxGroupContext } from './group-context';

type CheckboxValue = string | number;

type CheckBoxProps = {
  co?: ((theme: Theme) => React.CSSProperties) | React.CSSProperties;
  disabled?: boolean;
  checked?: boolean;
  children?: React.ReactNode;
  value?: CheckboxValue;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => any;
};

const CheckBox = ({
  disabled = false,
  checked = false,
  // defaultChecked = false,
  onChange,
  children,
  value,
  co,
  ...props
}: CheckBoxProps & React.ComponentPropsWithoutRef<'label'>) => {
  const groupContext = useContext(CheckboxGroupContext);
  let content: any = children;
  if (groupContext !== null && groupContext.value.length > 0 && value) {
    checked = groupContext.value.includes(value);
  }
  if (groupContext !== null && groupContext.disabled) {
    disabled = disabled || groupContext.disabled;
  }
  let [ischecked, setIschecked] = useState(checked);
  const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIschecked(e.target.checked);
    onChange?.(e);
    if (groupContext !== null && value !== undefined) {
      if (e.target.checked) {
        groupContext.check(value);
      } else {
        groupContext.uncheck(value);
      }
    }
  };
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

  return (
    <label css={labelStyle} {...props}>
      <input
        css={inputStyle}
        type='checkbox'
        value={value ? value : content}
        onChange={handleClick}
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

CheckBox.Group = CheckBoxGroup;
export default CheckBox;
