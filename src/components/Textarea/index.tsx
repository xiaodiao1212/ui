import { useState } from 'react'
import * as React from 'react'
import classnames from 'classnames'
import palette from '../../constants/palette'
import { createUseStyles } from 'react-jss'
import { Theme } from '../../constants/theme'

type TextareaProps = {
  cssOptions?: React.CSSProperties
}
type RuleNames = 'textarea'

const useStyles = createUseStyles<RuleNames, TextareaProps, Theme>((theme) => ({
  textarea: ({ cssOptions }) => ({
    maxWidth: '100%',
    padding: theme?.paddingInput || '12px',
    backgroundColor: theme?.backgroundColorInput || palette.grey[100],
    color: theme?.colorTextInLight || palette.common.white,
    ...cssOptions,
  }),
}))

/**
 * Textarea:
 * if has prefix or suffix, the property flex is required.
 */
const Textarea = ({ cssOptions, className, ...props }: TextareaProps & React.ComponentPropsWithoutRef<'textarea'>) => {
  const classes = useStyles({ cssOptions })
  const computedClassNames = classnames(classes.textarea, className)
  return <textarea className={computedClassNames} {...props} />
}

export default Textarea
