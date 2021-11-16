import * as React from 'react'
import classnames from 'classnames'
import { createUseStyles } from 'react-jss'
import { Theme } from '../../constants/theme'

type RuleNames = 'toast'

interface ToastProps {
  className: string
  show?: boolean
  duration?: number
  children?: React.ReactNode
  cssOptions?: ((theme: Theme) => React.CSSProperties) | React.CSSProperties
}

const useStyles = createUseStyles<RuleNames, Pick<ToastProps, 'cssOptions' | 'show'>, Theme>(theme => ({
  toast: ({ show, cssOptions }) => {
    return {
      position: 'fixed',
      display: show ? 'flex' : 'none',
      inset: 0,
      maxWidth: '60vw',
      maxHeight: '7vh',
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '0.5em 1em',
      margin: 'auto',
      background: '#333',
      color: 'white',
      opacity: '60%',
      borderRadius: '4px',
      ...cssOptions?.(theme),
    }
  },
}))
const Toast = ({ cssOptions, children, className, show, ...props }: ToastProps) => {
  const classes = useStyles({
    show,
    cssOptions,
  })
  const computedClassNames = classnames(classes.toast, className)
  return <div className={computedClassNames}>{children}</div>
}
export default Toast
