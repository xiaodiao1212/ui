import { useState } from 'react'
import * as React from 'react'
import classnames from 'classnames'
import palette from '../../constants/palette'
import { createUseStyles } from 'react-jss'
import { Theme } from '../../constants/theme'

type CheckBoxProps = {
  css?: (theme: Theme) => React.CSSProperties
  checkedNode?: React.ReactNode
  uncheckedNode?: React.ReactNode
  contentNode?: React.ReactNode
  disabledNode?: React.ReactNode
  disabled?: boolean
  checked?: boolean
  onCheckedChange?: () => any
}
type RuleNames = 'checkBox'

const useStyles = createUseStyles<RuleNames, CheckBoxProps, Theme>(theme => ({
  checkBox: ({ css }) => ({
    display: 'flex',
    alignItems: 'center',
    ...css?.(theme),
  }),
}))

/**
 * CheckBox:
 */
const CheckBox = ({
  checkedNode,
  uncheckedNode,
  contentNode,
  disabledNode,
  disabled = false,
  checked = false,
  onCheckedChange,
  css,
  className,
  ...props
}: CheckBoxProps & React.ComponentPropsWithoutRef<'div'>) => {
  const classes = useStyles({ css })
  const computedClassNames = classnames(classes.checkBox, className)
  const handleClickCheckNode = () => {
    onCheckedChange?.()
  }
  return (
    <div className={computedClassNames} {...props}>
      {disabled ? (
        disabledNode
      ) : checked ? (
        <div onClick={handleClickCheckNode}>{checkedNode}</div>
      ) : (
        <div onClick={handleClickCheckNode}>{uncheckedNode}</div>
      )}
      {contentNode}
    </div>
  )
}

export default CheckBox
