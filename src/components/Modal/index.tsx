import * as React from 'react'
import classnames from 'classnames'
import { createUseStyles } from 'react-jss'
import { Theme } from '../../constants/theme'

interface ModalProps {
  show: boolean
}

type RuleNames = 'modal'

const useStyles = createUseStyles<RuleNames, ModalProps, Theme>((theme) => ({
  modal: {},
}))
const Modal = ({ show = false, className, children, ...props }: ModalProps & React.ComponentProps<'div'>) => {
  const classes = useStyles({
    show,
  })
  const computedClassNames = classnames(classes.modal, className)
  return (
    <div className={computedClassNames} {...props}>
      {children}
    </div>
  )
}

export default Modal
