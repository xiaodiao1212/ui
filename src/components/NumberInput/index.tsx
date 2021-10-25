import { createUseStyles } from 'react-jss'
import classnames from 'classnames'
import { Theme } from '../../constants/theme'

import * as React from 'react'

type NumberInputProps = Partial<{
  onChange: (value: string) => void
  children: React.ReactNode
  className: string
  css: (theme: Theme) => React.CSSProperties
}>

type RuleNames = 'number-input'
const useStyles = createUseStyles<RuleNames, Omit<NumberInputProps, 'onFileChange'>, Theme>(theme => ({
  'number-input': ({ css, ...props }) => ({
    '& > input::-webkit-outer-spin-button': {
      WebkitAppearance: 'none',
    },
    ...props,
    ...css?.(theme),
  }),
}))

const NumberInput = ({ onChange, children, css, className, ...props }: NumberInputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(
      e.target.value.length > 1
        ? e.target.value[0] == '0'
          ? e.target.value.substring(1)
          : e.target.value
        : e.target.value,
    )
  }
  const classes = useStyles({
    css,
  })
  const computedClassNames = classnames(classes['number-input'], className)
  return (
    <label aria-label='number input' className={computedClassNames} {...props}>
      <input hidden={!!children} type={'number'} onChange={handleChange} />
      {children}
    </label>
  )
}

export default NumberInput
