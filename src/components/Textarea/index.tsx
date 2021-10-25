import * as React from 'react'
import classnames from 'classnames'
import { createUseStyles } from 'react-jss'
import { Theme } from '../../constants/theme'

type TextareaProps = {
  css?: (theme: Theme) => React.CSSProperties
}
type RuleNames = 'textarea'

const useStyles = createUseStyles<RuleNames, TextareaProps, Theme>(theme => ({
  textarea: ({ css }) => ({
    width: '100%',
    padding: '12px',
    backgroundColor: theme ? (theme.mode == 'light' ? theme.color.greyLight : theme.color.white) : 'transparent',
    color: theme ? (theme.mode == 'light' ? theme.color.black : theme.color.white) : '#111827',
    ...css?.(theme),
  }),
}))

/**
 * Textarea:
 * if has prefix or suffix, the property flex is required.
 */
const Textarea = ({ css, className, ...props }: TextareaProps & React.ComponentPropsWithoutRef<'textarea'>) => {
  const classes = useStyles({ css })
  const computedClassNames = classnames(classes.textarea, className)
  return <textarea className={computedClassNames} {...props} />
}

export default Textarea
