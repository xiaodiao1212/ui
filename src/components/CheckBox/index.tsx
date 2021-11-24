/** @jsxImportSource @emotion/react */
import { useContext, createContext, useState } from 'react';
import { Theme } from '../../constants/theme';
import { useTheme, css } from '@emotion/react';

type CheckboxValue = string | number;

const CheckboxGroupContext = createContext<{
  value: CheckboxValue[];
  disabled: boolean;
  check: (val: CheckboxValue) => void;
  uncheck: (val: CheckboxValue) => void;
} | null>(null);

type CheckBoxProps = {
  co?: ((theme: Theme) => React.CSSProperties) | React.CSSProperties;
  disabled?: boolean;
  checked?: boolean;
  children?: React.ReactNode;
  value?: CheckboxValue;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => any;
};

type CheckBoxGroupProps = {
  co?: ((theme: Theme) => React.CSSProperties) | React.CSSProperties;
  disabled?: boolean;
  value?: string[];
  defaultValue?: string[];
  onChange?: (e: React.FormEvent<HTMLInputElement>) => any;
};

const CheckBoxGroup = ({
  disabled = false,
  onChange,
  children,
  value = [],
  co,
  ...props
}: CheckBoxGroupProps & React.ComponentPropsWithoutRef<'div'>) => {
  const theme = useTheme() as Theme;
  const [isValue, setValue] = useState(value);
  const style = css({
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    ...(typeof co == 'function' && co(theme)),
  });
  return (
    // <CheckboxGroupContext.Provider
    //   value={{
    //     value: value,
    //     disabled: disabled,
    //     check: v => {
    //       setValue([...isValue, v]);
    //     },
    //     uncheck: v => {
    //       setValue(value.filter(item => item !== v));
    //     },
    //   }}>
    //   {children}
    // </CheckboxGroupContext.Provider>
    <div css={style}>{children}</div>
  );
};

const CheckBox = ({
  disabled = false,
  checked = false,
  defaultChecked = false,
  onChange,
  children,
  value,
  co,
  ...props
}: CheckBoxProps & React.ComponentPropsWithoutRef<'label'>) => {
  let [ischecked, setIschecked] = useState(checked);
  const groupContext = useContext(CheckboxGroupContext);
  let content: any = children;
  // const handleClickCheckNode = () => {
  //   setIsChecked(!isChecked);
  // };
  // const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   onChange?.(e);
  // };
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
    <CheckBoxGroup>
      <label css={labelStyle} {...props}>
        <input
          css={inputStyle}
          type='checkbox'
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
    </CheckBoxGroup>
  );
};

CheckBox.Group = CheckBoxGroup;
export default CheckBox;
