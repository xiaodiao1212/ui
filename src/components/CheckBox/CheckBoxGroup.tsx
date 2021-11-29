/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { Theme } from '../../constants/theme';
import { useTheme, css } from '@emotion/react';
import { CheckboxGroupContext } from './group-context';

type CheckboxValue = string | number;

type CheckBoxGroupProps = {
  co?: ((theme: Theme) => React.CSSProperties) | React.CSSProperties;
  disabled?: boolean;
  value?: CheckboxValue[];
  defaultValue?: CheckboxValue[];
  children: any;
  onChange?: ((val: CheckboxValue[]) => void) | undefined;
};

const CheckBoxGroup = ({ disabled = false, onChange, children, value = [], co }: CheckBoxGroupProps) => {
  const theme = useTheme() as Theme;
  const [isValue, setValue] = useState<CheckboxValue[]>(value);
  const style = css({
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    ...(typeof co == 'function' && co(theme)),
  });
  if (isValue.length > 0) {
    onChange?.(isValue);
  }
  return (
    <CheckboxGroupContext.Provider
      value={{
        value: isValue,
        disabled: disabled,
        check: v => {
          setValue([...isValue, v]);
        },
        uncheck: v => {
          setValue(isValue.filter(item => item !== v));
        },
      }}>
      {children}
    </CheckboxGroupContext.Provider>
  );
};

export default CheckBoxGroup;
